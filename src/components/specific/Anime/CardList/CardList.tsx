import React, {Component} from 'react';
import {observer} from "mobx-react";
import {Select} from "antd";

import './styles.scss';

import AppActions from "../../../../data/App/Actions";
import {FIXED_COMPONENT_TYPES, MODALS_BY_ID} from "../../../../data/App/Types";
import AppStore from "../../../../data/App/Store";
import Card from "./Card";
import {MediaFragment} from "../../../../global/managers/AniList/AniListTypes";
import {Scrollable} from "../../../common/Scrollable/Scrollable";
import {Flex} from "../../../common/Flex/Flex";
import AnimeMethods from "../../../../data/Anime/Methods";


interface AnimeCardListProps{
    animeId?:number
    className?:string,
}
interface AnimeCardListState{
    termFilters:string[],
}

class AnimeCardList extends Component<AnimeCardListProps, AnimeCardListState> {

    state:AnimeCardListState = {
        termFilters:[],
    };

    onChangeFilterTerms = (values:string[]) => {
        this.setState({termFilters:values});
    };

    get anime(){
        let anime = AppStore.anime.all;

        if (!anime) return null;
        const {termFilters} = this.state;

        anime = AnimeMethods.filter.byTerms(anime, termFilters);
        return anime.map((singleAnime:MediaFragment) => <Card key={singleAnime.id} animeId={singleAnime.id}/>)
    }

    render(){
        return (
            <section className='anime-card-list'>
                <section className='filters-container'>
                    <section className='filters'>
                        <Select className='filter-select' mode='tags' size='large' onChange={this.onChangeFilterTerms}/>
                        <Select className='filter-select' size='large'/>
                    </section>
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