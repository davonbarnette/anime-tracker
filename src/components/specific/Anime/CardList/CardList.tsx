import React, {Component} from 'react';
import {observer} from "mobx-react";
import {Select} from "antd";
const Option = Select.Option;

import './styles.scss';

import AppStore from "../../../../data/App/Store";
import Card from "./Card";
import {MediaFragment, MediaSeason} from "../../../../global/managers/AniList/AniListTypes";
import {Scrollable} from "../../../common/Scrollable/Scrollable";
import {Flex} from "../../../common/Flex/Flex";
import AnimeMethods from "../../../../data/Anime/Methods";
import {ANIME_SORT_FUNCTIONS} from "../../../../data/Anime/Types";


interface AnimeCardListProps{
    animeId?:number
    className?:string,
}
interface AnimeCardListState{
    termFilters:string[],
    sortOptions:string[],
}

class AnimeCardList extends Component<AnimeCardListProps, AnimeCardListState> {

    state:AnimeCardListState = {
        termFilters:[],
        sortOptions:[],
    };

    onChangeFilterTerms = (termFilters:string[]) => {
        this.setState({termFilters});
    };
    onChangeSortOptions = (sortOptions:string[]) => {
        this.setState({sortOptions});
    };
    onChangeYear = (year:string) => {

    };
    onChangeSeason = (season:string) => {

    };
    get animeSortOptions(){
        return Object.keys(ANIME_SORT_FUNCTIONS).map((key:string, i:number) => {
            let filter = (ANIME_SORT_FUNCTIONS as any)[key];
            const { ID, DISPLAY } = filter;
            return <Option key={ID}>{DISPLAY}</Option>
        })
    }
    get animeYearOptions(){
        let startYear = 1990;
        let endYear = new Date().getFullYear() + 1;
        let ret = [];
        for (let i = startYear; i < endYear; i++) {
            let curYear = i.toString();
            ret.unshift(<Option key={curYear}>{curYear}</Option>)
        }
        return ret;
    }
    get animeSeasonOptions(){
        let seasons = MediaSeason;
        let ret = [];
        for (let key in seasons){
            ret.push(<Option key={key}>{key}</Option>);
        }
        return ret;
    }

    get anime(){
        let anime = AppStore.anime.all;

        if (!anime) return null;
        const {termFilters, sortOptions} = this.state;

        anime = AnimeMethods.filter.byTerms(anime, termFilters);

        let sortFunctions = AnimeMethods.sort.getSortFunctions(sortOptions);
        sortFunctions.forEach(sortFunction => anime = sortFunction(anime!));

        return anime.map((singleAnime:MediaFragment) => <Card key={singleAnime.id} animeId={singleAnime.id}/>)
    }

    render(){
        return (
            <section className='anime-card-list'>
                <section className='filters-container'>
                    <div className='filters'>
                        <Select className='filter-select' placeholder='Choose a year'
                                size='large' onChange={this.onChangeFilterTerms}>
                            {this.animeYearOptions}
                        </Select>
                        <Select className='filter-select' placeholder='Choose a season' size='large'>
                            {this.animeSeasonOptions}
                        </Select>
                    </div>
                    <div className='filters'>
                        <Select className='filter-select' dropdownMenuStyle={{display:'none'}}
                                placeholder='Search and press Enter...'
                                mode='tags' size='large' onChange={this.onChangeFilterTerms}/>
                        <Select className='filter-select' placeholder='Sort By' size='large'
                                mode='multiple' onChange={this.onChangeSortOptions}>
                            {this.animeSortOptions}
                        </Select>
                    </div>
                </section>

                <Scrollable scrollY className='anime-card-list-scrollable'>
                    <Flex justifyContent='center'>
                        <Flex className='cards-wrapper'>{this.anime}</Flex>
                    </Flex>
                </Scrollable>
            </section>
        )
    }
}

export default observer(AnimeCardList);