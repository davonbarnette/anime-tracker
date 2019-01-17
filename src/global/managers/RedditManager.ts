import axios, {AxiosResponse} from 'axios';

const USER_AGENT_STRING='web:davonbarnette.com:v1 (by /u/classikdb)';
const APPLICATION_ONLY_STRING='client_credentials';
const REDDIT_CONTENT_TYPE = { "Content-Type":"application/x-www-form-urlencoded" };

export class RedditManagerInstance {

    accessToken:any;

    async getOAuthTokenObject(clientId:string, clientSecret:string){
        let params = { grant_type:APPLICATION_ONLY_STRING};
        let headers = {
            Authorization: 'Basic ' + btoa(clientSecret), //replace with client secret
            "Content-Type":"application/x-www-form-urlencoded",
        };
        let auth = {username:clientId, password:clientSecret};
        let tokenObject:any = await axios(RedditAPIPathManager.authToken, {method:'post', params, headers, auth} );
        if (tokenObject) this.accessToken = tokenObject.access_token;
    }

    async queryRedditAPI(url:string, params:any){
        let headers = { Authorization: 'Bearer ' + this.accessToken, ...REDDIT_CONTENT_TYPE };
        let result:AxiosResponse = await axios(url, {method:'get', params, headers})
        return result.data;
    }

    async searchSubredditFor(subreddit:string, threadTitle:string, sort:string){
        //can sort by top, best, new, etc.
        let url = RedditAPIPathManager.getSRSearchURL(subreddit);
        let params = { q:threadTitle, sort, restrict_sr:true, t:'all'};
        return await this.queryRedditAPI(url, params);
    }

    convertToDiscussionTitle(threadTitle:string, episodeNumber:number){
        let regexedString = threadTitle.replace(/[^a-zA-Z0-9]/g,' ');
        return `[SPOILERS] ${regexedString} Episode ${episodeNumber}`;
    }

    async getCommentsFromThread(subreddit:string, threadId:string, sort:string, limit:number = 10){
        let url = RedditAPIPathManager.getCommentsFromThreadURL(subreddit,threadId);
        let params = { article:threadId, sort, limit };
        let result = await this.queryRedditAPI(url, params);
        return result.data;
    }

    async getTopCommentsFromSR(subreddit:string, threadTitle:string){
        let searchResults = await this.searchSubredditFor(subreddit,threadTitle,'relevance');
        //Get the first thread id from search results
        if (searchResults.children.length == 0) return null;
        let threadId = searchResults.children[0].data.id;

        //commentsObject returns an array with [<actual thread>,<comment data>] - so, access second item of array
        return await this.getCommentsFromThread(subreddit,threadId,'relevance');
    }
}

const RedditManager = new RedditManagerInstance();
export default RedditManager;

export class RedditAPIPathManager {

    static BASE_OAUTH = 'https://oauth.reddit.com';
    static BASE_API = 'https://www.reddit.com/api/v1';
    static ACCESS_TOKEN = 'access_token';

    static getSubredditURL(subreddit:string){
        return RedditAPIPathManager.BASE_OAUTH + `/r/${subreddit}`
    }
    static getSRSearchURL(subreddit:string){
        return `${RedditAPIPathManager.getSubredditURL(subreddit)}/search`;
    }
    static getCommentsFromThreadURL(subreddit:string,threadId:string){
        return `${RedditAPIPathManager.getSubredditURL(subreddit)}/comments/${threadId}`
    }
    static get authToken(){
        return `${RedditAPIPathManager.BASE_API}/${RedditAPIPathManager.ACCESS_TOKEN}`;
    }


}