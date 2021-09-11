import express from "express";
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';
import cors from 'cors';

const port = 5555; // default port to listen
const mongoPrefix = '`mongodb://localhost:27017/';
const dbName = 'portfolioBuilder';


const startServer = async () => {
    const app = express();
    app.use(cors())
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start()
    server.applyMiddleware({ app });
    await mongoose.connect(`${mongoPrefix}${dbName}`, { 
        useNewUrlParser: true
    });
    
    app.listen(port, () => {
        console.log( `server started at http://localhost:${port}${server.graphqlPath}` );
    });
}

startServer();
