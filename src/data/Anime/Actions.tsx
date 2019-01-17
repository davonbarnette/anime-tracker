import {QueryAnimeRequestArgs} from "./Types";
import AnimeAPI from "./APIHandler";
import AppStore from "../App/Store";

export default class AnimeActions {

    static async query(variables:any){
        let query = AppStore.anilist.gql.baseQuery;
        let args:QueryAnimeRequestArgs = {query, variables};
        let response = await AnimeAPI.getAnime(args);
        const { media, pageInfo } = response.data.data.Page;
        AppStore.anime.setMultiple(media);
    }
}