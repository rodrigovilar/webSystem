import { ApolloServer } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import {sequelize} from './sequelize';
import {BookResolver} from './resolvers/book.resolver';

const main = async () => {
    const schema = await buildSchema({
        resolvers: [BookResolver],
        emitSchemaFile: true,
        validate: false,
    });

    sequelize.sync();

    const server = new ApolloServer({schema});
    const app = Express();
    server.applyMiddleware({app});
    app.listen({ port: 3333 }, () =>
        console.log(`🚀 Server ready and listening at ==> http://localhost:3333${server.graphqlPath}`))
};

main().catch((error)=>{
    console.log(error, 'error');
})
