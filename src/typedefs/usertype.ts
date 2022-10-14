import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLScalarType, GraphQLString } from 'graphql'

export const user_type = new GraphQLObjectType({
    name: "User",
    fields: {
        id: {type: GraphQLID},
        firstName: {type: GraphQLString},
        lastName: { type: GraphQLString },
        age: { type: GraphQLInt}
    }
})