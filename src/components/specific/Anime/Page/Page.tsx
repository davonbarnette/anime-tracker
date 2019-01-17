import React, {Component} from 'react';
import {observer} from "mobx-react";
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from "react-router";

import './styles.scss';

import AppStore from "../../../../data/App/Store";
import {Flex} from "../../../common/Flex/Flex";
import {Scrollable} from "../../../common/Scrollable/Scrollable";
import ContentHeader from "./ContentHeader";
import AnimeCardList from "../CardList/CardList";


interface AnimePageProps extends RouteComponentProps<{animeId:string}> {

}

class AnimePage extends Component<AnimePageProps, any> {

    get animeId(){
        const {animeId} = this.props.match.params;
        if (!animeId) return null;
        else return parseInt(animeId)
    }

    get content(){
        if (!this.animeId) return <AnimeCardList/>;
        let anime = AppStore.anime.getById(this.animeId);
        if (!anime) return null;

        return (
            <Flex className='anime-content' flexDirection='column'>
                <ContentHeader animeId={this.animeId}/>
                <Scrollable scrollY>
                    <Switch>
                        {/*
                            Some Router Content...
                        */}
                    </Switch>
                </Scrollable>
            </Flex>
        )
    }

    render(){
        if (!AppStore.anime) return null;
        const {animeId} = this.props.match.params;

        return(
            <section className='anime-page'>
                {this.content}
            </section>
        )
    }
}

export default withRouter(observer(AnimePage));