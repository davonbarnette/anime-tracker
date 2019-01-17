import {decorate, observable} from "mobx";
import {BaseMapManager} from "../../global/managers/BaseMapManager";
import AnimeActions from "../Anime/Actions";
import {MediaFormat, MediaFragment, MediaType} from "../../global/managers/AniList/AniListTypes";
import AniListManager from "../../global/managers/AniList/AniListManager";

class AppStoreClass {

    /* Data Types */
	anime:      BaseMapManager<number, MediaFragment> = new BaseMapManager("id");
    anilist:    AniListManager = new AniListManager();
    drawer?:    string;
    modal?:     string;


    constructor(){

    }

    initialize(){
        //Delete this when you actually initialize, this is just for testing:
        AnimeActions.query({
            page:1,
            seasonYear: new Date().getFullYear(),
            type:MediaType.ANIME,
            format:MediaFormat.TV,
            season:this.anilist.getCurrentMediaSeason(),
            averageScore_not:null
        })
    }

}

decorate(AppStoreClass,{
    /* Data Decorators */
	anime:      observable,
    drawer:     observable,
    modal:      observable,
});

const AppStore = new AppStoreClass();
export default AppStore;