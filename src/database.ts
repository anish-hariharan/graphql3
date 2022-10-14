import { Profile } from "./entity/Profile"
import { User } from "./entity/User"
import "reflect-metadata"
import { Connection, createConnection } from "typeorm"
import { ApolloServer } from "apollo-server"
import { schema } from "./schema"


/*export class Database {
    public async getConnection(): Promise<Connection>{
const connection = await createConnection().then(() => console.log("connected"))}
       /*return  createConnection().then(async connection => {

            console.log("Inserting a new user into the database...")
            const user = new User()
            user.firstName = "Timber"
            user.lastName = "Saw"
            user.age = 25

            const profile = new Profile()
            profile.age = 25
            profile.gender = "male"

            user.profile = profile

            const userRepo = connection.getRepository(User)
            await userRepo.save(user)

            const users = await userRepo
                .createQueryBuilder("user")
                .leftJoinAndSelect("user.profile", "profile")
                .getMany()
            //console.log(users)

            console.log("Here you can setup and run express / fastify / any other framework.")

            const profRepo = connection.getRepository(Profile)

            const profiles = await profRepo
                .createQueryBuilder("profile")
                .leftJoinAndSelect("profile.user", "user")
                .getMany()

            console.log(profiles)

            const server = new ApolloServer({ schema })

            await server.listen(2004);

            console.log("started")

        }).catch(error => console.log(error))
    }
}*/
export class Database {

    private _connection: Connection

    public  async connection(): Promise<Connection> {
        if(!this._connection){
            this._connection = await createConnection()
        }

        return this._connection
    }
}

console.log("running")