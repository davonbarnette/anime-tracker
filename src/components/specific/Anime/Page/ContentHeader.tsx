import React, {Component} from 'react';
import {observer} from "mobx-react";

import './styles.scss';

import Tabs from "./Tabs";
import AppStore from "../../../../data/App/Store";
import {Flex} from "../../../common/Flex/Flex";

interface AnimeContentHeaderProps {
    animeId:number,
}

class AnimeContentHeader extends Component<AnimeContentHeaderProps, any> {

    render(){
        if (!AppStore.anime) return null;
        const {animeId } = this.props;
        if (!animeId) return null;
        let anime = AppStore.anime.getById(animeId);
        if (!anime) return null;
        return(
            <Flex className='anime-content-header'>
                <section className='header'>
                    <div className='header-content'>
                        <div className='left'>
                            <div className='anime-name'>{anime.title!.romaji}</div>
                        </div>
                        <div className='right'>

                        </div>
                    </div>
                </section>
                {/*<section className='tabs-container'>*/}
                    {/*<Tabs className='anime-header-tabs' animeId={animeId}/>*/}
                {/*</section>*/}
            </Flex>
        )
    }
}

export default observer(AnimeContentHeader);