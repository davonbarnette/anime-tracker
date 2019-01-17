import React, {Component} from 'react';
import {observer} from "mobx-react";

import './styles.scss';

import ItemsList from "../../../common/ItemsList/ItemsList";
import {ItemsListItemType} from "../../../common/ItemsList/Types";
import AppActions from "../../../../data/App/Actions";
import {FIXED_COMPONENT_TYPES, MODALS_BY_ID} from "../../../../data/App/Types";
import AppStore from "../../../../data/App/Store";
import AnimeListItem from "./ListItem";
import {MediaFragment} from "../../../../global/managers/AniList/AniListTypes";

interface AnimeListProps{
    animeId?:number
    className?:string,
}

class AnimeList extends Component<AnimeListProps> {

    onAddClick = () => {
        AppActions.openFixedComponent(FIXED_COMPONENT_TYPES.MODAL, MODALS_BY_ID.EXAMPLE_MODAL)
    };

    get items(){
        let anime = AppStore.anime.all;
        if (!anime) return undefined;

        return anime.map((singleAnime:MediaFragment, index:number) => {
            const { id, title } = singleAnime;
            let selected = this.props.animeId === id;
            return {
                key:id,
                value:title!.english,
                component: <AnimeListItem key={id} animeId={id} selected={selected}/>,
            } as ItemsListItemType;
        });
    }

    render(){
        return <ItemsList itemName='Anime' onAddClick={this.onAddClick} items={this.items}/>
    }
}

export default observer(AnimeList);