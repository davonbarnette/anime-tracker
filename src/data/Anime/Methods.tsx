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

        byAverageScore(anime:MediaFragment[], direction:'desc'|'asc' = 'desc'){

        },

        getSortFunctions: (filterIdsToApply: string[]) => {
            return filterIdsToApply.map(filterIdToApply => {
                return (anime:MediaFragment[])=>(ANIME_SORT_FUNCTIONS as any)[filterIdToApply].FILTER_FUNCTION(anime);
            });
        },
    }
}