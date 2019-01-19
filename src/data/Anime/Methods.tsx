import {MediaFragment} from "../../global/managers/AniList/AniListTypes";
import {ANIME_SORT_FUNCTIONS} from "./Types";

export default class AnimeMethods {


    static filter = {

        byTerms: (anime: MediaFragment[], termFilters: string[]) => {
            if (termFilters.length === 0) return anime;
            return anime.filter((singleAnime: MediaFragment) => {
                let romaji = singleAnime.title!.romaji;
                let english = singleAnime.title!.english;
                for (let i = 0; i < termFilters.length; i++) {
                    const termFilter = termFilters[i];
                    if (romaji && romaji.toLowerCase().indexOf(termFilter.toLowerCase()) !== -1) return true;
                    if (english && english.toLowerCase().indexOf(termFilter.toLowerCase()) !== -1) return true;
                }
                return false;
            });
        },
    };
    static sort = {

        byScore(anime:MediaFragment[], prop:string, direction:'desc'|'asc' = 'desc'){
            if (!anime || anime.length === 0) return [];
            return anime.sort((a: MediaFragment|any, b:MediaFragment|any) => {
                if (!a[prop] || !b[prop]) return 0;
                if (direction === 'desc') return b[prop] - a[prop];
                else return a[prop] - b[prop];
            })
        },

        getSortFunctions: (filterIdsToApply: string[]) => {
            return filterIdsToApply.map(filterIdToApply => {
                return (anime:MediaFragment[])=>(ANIME_SORT_FUNCTIONS as any)[filterIdToApply].SORT_FUNCTION(anime);
            });
        },
    }
}