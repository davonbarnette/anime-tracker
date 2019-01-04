export interface AnimeType {
    uuid: string,
    name:string,
}

export interface CreateAnimeRequestArgs {
    name:string,
    uuid:string,
}

export interface CreateAnimeResponseArgs extends AnimeType {

}

export interface UpdateAnimeResponseArgs extends AnimeType {

}

export interface DeleteAnimeResponseArgs {
    uuid: string,
}

export interface QueryAnimeResponseArgs extends AnimeType {

}