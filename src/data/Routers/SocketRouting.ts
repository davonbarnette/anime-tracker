
/* Consumer Imports */
import AnimeConsumer from "../Anime/Consumer";

/*
 * Use this file when you have a WebSocket that uses an event:message system. When an event like SOCKET_ACTIONS.example
 * is fired, the backend should respond with an event. Register that key in SOCKET_CALLBACKS for which callback you want.
 * This also depends on what routing method you're using - so check global/managers/EventRouter.ts to see which one
 * you're using.
 *
 */

export const SOCKET_ACTIONS: any = {

    /* Socket Actions */
    create_anime: 'create_anime',
    query_anime: 'query_anime',
    update_anime: 'update_anime',
    delete_anime: 'delete_anime',
};


export const SOCKET_CALLBACKS: any = {

    /* Socket Callbacks */
    create_anime: AnimeConsumer.onCreateOne,
    update_anime: AnimeConsumer.onUpdateOne,
    delete_anime: AnimeConsumer.onDeleteOne,
    query_anime: AnimeConsumer.onQueryOne,
};