import {QueryType} from "../../data/Anime/Types";

export default class GraphQLManager {

    private query:any;

    constructor(queryFunction:(variables:any,args:any)=>void, queryTypes:QueryType[]){
        this.query = this.buildGQLBaseQuery(queryFunction, queryTypes);
    }

    buildGQLBaseQuery(queryFunction:(variables:any,args:any)=>void, queryTypes:QueryType[]){
        let variables = "";
        let args = "";

        queryTypes.forEach(queryType => {
            const { type, name } = queryType.gql;
            variables += `$${name}:${type} `;
            args += `${name}:$${name} `;
        });

        return queryFunction(variables, args);
    }

    get baseQuery(){
        return this.query;
    }
}