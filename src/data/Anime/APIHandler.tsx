import axios, {AxiosResponse} from 'axios'
import {QueryAnimeRequestArgs, QueryAnimeResponseArgs} from "./Types";

export default class AnimeAPI {

    static async getAllAnime(){
        let url = AnimeAPIRoutes.animeBase;
        await axios.get(url);
    }

    static async getAnime(args:QueryAnimeRequestArgs):Promise<AxiosResponse<QueryAnimeResponseArgs>>{
        let url = AnimeAPIRoutes.animeBase;
        let headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' };
        return await axios.post(url, JSON.stringify(args), {headers});
    }

    static async animeOnUploadProgress(animeId:string, data:any, onUploadProgress?:(progressEvent:any) => void){
        let url = AnimeAPIRoutes.getAnimeById(animeId);
        await axios({ method:'post', url, data, onUploadProgress});
    }

}

export class AnimeAPIRoutes {

    static base = 'https://graphql.anilist.co';

    static get animeBase(){
        return `${AnimeAPIRoutes.base}`
    }

    static getAnimeById(animeId:string){
        return `${AnimeAPIRoutes.animeBase}/${animeId}`
    }

}