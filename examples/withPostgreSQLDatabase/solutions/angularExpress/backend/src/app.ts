import { ApolloServer } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import {buildSchemaSync} from 'type-graphql';
import { sequelize } from "./sequelize";

import { BookResolver } from "./resolvers/book.resolver";

const schema = buildSchemaSync({
    resolvers: [BookResolver],
    emitSchemaFile: false,
    validate: false,
});

sequelize.sync();

const server = new ApolloServer({ schema });
const app = Express();
server.applyMiddleware({ app });

export default app;
