import React, {Component} from 'react';
import {observer} from "mobx-react";

import './styles.scss';

import AnimeActions from "../../../../data/Anime/Actions";
import {ValidationObject} from "../../../../global/managers/Validator";
import {Flex} from "../../../common/Flex/Flex";
import Field from "../../../common/Field/Field";
import {AnimeValidation} from "../../../../data/Anime/ValidationSchemas";
import Button from "../../../common/Button/Button";
import AppActions from "../../../../data/App/Actions";
import {FIXED_COMPONENT_TYPES} from "../../../../data/App/Types";

interface AnimeFormState {
    [key:string]:string|null,
}

class AnimeForm extends Component<any, AnimeFormState> {

    state:AnimeFormState = {
        name:null,
    };

    onSubmitClick = () => {
        const { name } = this.state;
        // AnimeActions.createOne(name!);
        AppActions.closeFixedComponent(FIXED_COMPONENT_TYPES.MODAL);
    };

    onInputChange = (id:string, value:string, validationObject:ValidationObject|null) => {
        if (validationObject && !validationObject.isValid) this.setState({[id]:null});
        else this.setState({[id]:value});
    };

    get disabled(){
        const { name } = this.state;
        return !name || name === '';
    }

    render(){
        return(
            <Flex className='anime-form' flexDirection='column'>
                <section className='anime-form content'>
                    <Field id='name' label='Name' validation={AnimeValidation.name} className='field'
                       required onChange={this.onInputChange}/>
                </section>
                <section className='submit'>
                    <Button className='button' enabled={!this.disabled} onClick={this.onSubmitClick}>SUBMIT</Button>
                </section>
            </Flex>
        )
    }
}

export default observer(AnimeForm);