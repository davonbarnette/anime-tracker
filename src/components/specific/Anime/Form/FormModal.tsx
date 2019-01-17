import React, {Component} from 'react';
import {observer} from "mobx-react";

import './styles.scss';

import AnimeForm from "./Form";
import AppActions from "../../../../data/App/Actions";
import {FIXED_COMPONENT_TYPES} from "../../../../data/App/Types";
import Modal from "../../../common/Modal/Modal";
import {Flex} from "../../../common/Flex/Flex";

class AnimeFormModal extends Component{

    onExitModal = () => {
        AppActions.closeFixedComponent(FIXED_COMPONENT_TYPES.MODAL);
    };

    render(){
        return(
            <Modal exitModalFn={this.onExitModal} title='Add Anime'>
                <Flex className='anime-modal-content' flexDirection='column' justifyContent='center'>
                    <AnimeForm/>
                </Flex>
            </Modal>
        )
    }
}

export default observer(AnimeFormModal);