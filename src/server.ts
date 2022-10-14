import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"
import { schema } from "./schema"
import { greeting } from "./schema/query"
import typedef from "./typedefs/typedef"

async function main () {
    
    const server = new ApolloServer( {schema} )

    await server.listen(2004);

    console.log("started")
}

main().catch((err) => console.log("the error is in main "+ err))
/*import * as express from "express"
import { graphqlHTTP } from "express-graphql"
import { buildSchema } from "graphql"

const schema = buildSchema(`

type Query {
    hello : String
}
`)

var root = {
    hello: () => {
        return "Hello world"
    }
}

var app = express();

app.use('/graphql', graphqlHTTP ({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(4000)
console.log("connr=ecteed")*/