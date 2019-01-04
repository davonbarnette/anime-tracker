import {CreateAnimeRequestArgs} from "./Types";
import uuid from 'uuid/v1';
import AnimeConsumer from "./Consumer";

export default class AnimeActions {

    static createOne(name:string){
        let args:CreateAnimeRequestArgs = { name, uuid:uuid() };

        // Example of consumer taking in the response from this request.
        AnimeConsumer.onCreateOne(args);
    }
}