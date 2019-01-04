import axios from 'axios'

export default class AnimeAPI {

    static async getAllAnime(){
        let url = AnimeAPIRoutes.animeBase;
        await axios.get(url);
    }

    static async getAnime(animeId:string){
        let url = AnimeAPIRoutes.getAnimeById(animeId);
        await axios.get(url);
    }

    static async animeOnUploadProgress(animeId:string, data:any, onUploadProgress?:(progressEvent:any) => void){
        let url = AnimeAPIRoutes.getAnimeById(animeId);
        await axios({ method:'post', url, data, onUploadProgress});
    }

}

export class AnimeAPIRoutes {

    static base = '/api/anime';

    static get animeBase(){
        return `${AnimeAPIRoutes.base}`
    }

    static getAnimeById(animeId:string){
        return `${AnimeAPIRoutes.animeBase}/${animeId}`
    }

}