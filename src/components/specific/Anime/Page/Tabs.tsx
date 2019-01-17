import React, {Component} from 'react';
import {observer} from "mobx-react";
import * as Icon from 'react-feather';
import './styles.scss';
import {RouteComponentProps, withRouter} from "react-router";
import Tabs from "../../../common/Tabs/Tabs";
import {SingleTab} from "../../../common/Tabs/types";
import BrowserRouter, {BrowserRoutes} from "../../../../data/Routers/BrowserRouter";

interface AnimeTabsProps extends RouteComponentProps{
    animeId:number
    className?:string,
}

class AnimeTabs extends Component<AnimeTabsProps> {
    render(){
        const {animeId, location, className } = this.props;
        const { pathname } = location;
        return <Tabs tabs={TabsObject(animeId, pathname)} className={className}/>
    }
}

export default withRouter(observer(AnimeTabs));

const TabsObject = (animeId:number,pathname:string):SingleTab[] => {
    return [
        {
            label: 'Anime Tab',
            icon: (color: string) => <Icon.Image color={color} size={18}/>,
            onClick: (e: MouseEvent) => {
                e.stopPropagation();
                BrowserRouter.push(BrowserRoutes.anime);
            },
            selected: pathname.indexOf(BrowserRoutes.anime) !== -1
        },
    ]
};