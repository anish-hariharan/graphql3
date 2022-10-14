import { GraphQLSchema, GraphQLObjectType } from "graphql"
import { createuser } from "./mutation"
import { greeting, hello } from "./query"


const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        greeting: greeting,
        hello: hello
    }
}) 

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        create: createuser
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})


