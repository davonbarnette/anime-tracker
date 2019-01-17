import React, {Component} from 'react';
import {observer} from "mobx-react";
import cx from 'classnames';
import * as Icon from 'react-feather';

import './styles.scss';

import BrowserRouter, {BrowserRoutes} from "../../../../data/Routers/BrowserRouter";
import AppStore from "../../../../data/App/Store";
import EllipsedText from "../../../common/EllipsedText/EllipsedText";

interface AnimeCardItemProps {
    animeId:number,
    selected?:boolean,
}

class AnimeCard extends Component<AnimeCardItemProps, any> {

    onAnimeCardItemClick = () => {
        const {animeId, selected } = this.props;
        if (!selected) BrowserRouter.push(BrowserRoutes.getAnimeById(animeId));
    };

    get anime(){
        const {animeId } = this.props;
        return AppStore.anime.getById(animeId);
    }
    get popularity(){
        if (!this.anime) return null;
        const { popularity } = this.anime;
        if (popularity && popularity > 1000) return (popularity / 1000).toFixed(1) + 'K';
        else return popularity;
    }
    get averageScoreColor(){
        if (!this.anime) return '#cecece';
        const { averageScore } = this.anime;
        if (!averageScore) return '#cecece';
        else if (averageScore < 70) return '#ff8600';
        else if (averageScore >= 70) return '#5eca63';
    }

    render(){

        if (!this.anime) return null;
        const { selected } = this.props;
        const { coverImage, title, externalLinks, averageScore, popularity } = this.anime;

        return (
            <div className='anime-card-outer'>
                <div className={cx('anime-card', {selected, 'has-image': !!coverImage!.large})}
                     style={{backgroundImage: `url(${coverImage!.large || ''})`}} onClick={this.onAnimeCardItemClick}>
                    <div className='details-container'>
                        <EllipsedText className='name' text={title!.romaji}/>
                        <div className='ratings'>
                            <div className='rating' style={{color:this.averageScoreColor}}>
                                <Icon.Star className='icon' size={12}/>{averageScore ? averageScore + '%' : 'N/A'}
                            </div>
                             <div className='rating' style={{color:'#ff3d5e'}}>
                                <Icon.Heart className='icon' size={12}/>{this.popularity}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default observer(AnimeCard);