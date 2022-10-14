import { GraphQLString } from "graphql";

export const greeting = {
    type: GraphQLString,
    resolve: () => "HelloWORLD"
}

export const hello = {
    type: GraphQLString,
    resolve: () =>  {
        return "Hello guys"
    }
}