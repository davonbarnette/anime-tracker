import {MediaFragment, Page} from "../../global/managers/AniList/AniListTypes";
import AnimeMethods from "./Methods";

export interface AnimeType {
    uuid: string,
    name:string,
}

export interface CreateAnimeRequestArgs {
    name:string,
    uuid:string,
}

export interface QueryAnimeRequestArgs {
    variables:any,
    query:string,
}

export interface CreateAnimeResponseArgs extends AnimeType {

}

export interface UpdateAnimeResponseArgs extends AnimeType {

}

export interface DeleteAnimeResponseArgs {
    uuid: string,
}

export interface QueryAnimeResponseArgs {
    data: { Page:Page }
}

export interface QueryType {
    id:string,
    display:string,
    gql:QueryGQLType,
    enums?:any
    range?:number[]
}

export interface QueryGQLType {
    name: string,
    type: string,
    visible?: boolean,
}


export const ANIME_SORT_FUNCTIONS = {
    AVERAGE_SCORE_DESC:{
        ID:'AVERAGE_SCORE_DESC',
        DISPLAY: 'Average Score Descending',
        SORT_FUNCTION:(anime:MediaFragment[])=>AnimeMethods.sort.byScore(anime, 'averageScore', 'desc'),
    },
    AVERAGE_SCORE_ASC:{
        ID:'AVERAGE_SCORE_ASC',
        DISPLAY: 'Average Score Ascending',
        SORT_FUNCTION:(anime:MediaFragment[])=>AnimeMethods.sort.byScore(anime, 'averageScore', 'asc'),
    },
    POPULARITY_DESC:{
        ID:'POPULARITY_DESC',
        DISPLAY: 'Popularity Descending',
        SORT_FUNCTION:(anime:MediaFragment[])=>AnimeMethods.sort.byScore(anime, 'popularity', 'desc'),
    },
    POPULARITY_ASC:{
        ID:'POPULARITY_ASC',
        DISPLAY: 'Popularity Ascending',
        SORT_FUNCTION:(anime:MediaFragment[])=>AnimeMethods.sort.byScore(anime, 'popularity', 'asc'),
    },
};