import {SingleHeaderItem} from "../../common/Header/types";
import {BrowserRoutes} from "../../../data/Routers/BrowserRouter";
import * as Icon from "react-feather";
import React, {Component} from "react";
import Header from "../../common/Header/Header";
import {RouteComponentProps, withRouter} from "react-router";

export const MAIN_HEADER_ITEMS:SingleHeaderItem[] = [
    // {path: BrowserRoutes.anime, label:'Anime', icon:(color:string)=><Icon.File color={color} size={18}/>},
];

interface AppHeaderProps extends RouteComponentProps {

}

class AppHeader extends Component<AppHeaderProps, any> {

    render(){
        return <Header headerItems={MAIN_HEADER_ITEMS}/>
    }
}

export default withRouter(AppHeader);
