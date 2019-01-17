import React, {Component} from 'react';
import {observer} from "mobx-react";
import cx from 'classnames';
import * as Icon from 'react-feather';

import './styles.scss';

import BrowserRouter, {BrowserRoutes} from "../../../../data/Routers/BrowserRouter";
import AppStore from "../../../../data/App/Store";

interface AnimeListItemProps {
    animeId:number,
    selected?:boolean,
}

class AnimeListItem extends Component<AnimeListItemProps, any> {

    onAnimeListItemClick = () => {
        const {animeId, selected } = this.props;
        if (!selected) BrowserRouter.push(BrowserRoutes.getAnimeById(animeId));
    };

    render(){
        const {animeId, selected } = this.props;
        let anime = AppStore.anime.getById(animeId);
        if (!anime) return null;

        return (
            <div className={cx('anime-list-item', { unselected: !selected, selected })} onClick={this.onAnimeListItemClick}>
                <div className='name'>{anime.title!.english}</div>
                {selected && <Icon.ChevronRight className='arrow-right' size={18}/>}
            </div>
        )
    }
}

export default observer(AnimeListItem);