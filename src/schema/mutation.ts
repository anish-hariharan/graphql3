import { GraphQLString, GraphQLID, GraphQLInt } from "graphql" 
import { Database } from "../database"
import { Profile } from "../entity/Profile"
import { User } from "../entity/User"
import { user_type } from "../typedefs/usertype" 


export const createuser = {
    type: user_type,
    args: {
        id: {type: GraphQLID},
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }, 
    async resolve(_: any, args: any){
        const { id, firstName, lastName, age } = args
        const connection  = await new Database().connection();
        const userRepo = connection.getRepository(User);
        const profileRepo = connection.getRepository(Profile);
        const savedEntity = userRepo.save({
            id: id,
            firstName: firstName,
            lastName: lastName,
            age: age
        })

        return {
            id: id,
            firstName: firstName,
            lastName: lastName,
            age: age
        };
    }
}