import express from "express";
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import cors from 'cors';

const port = 5555; // default port to listen
const mongoPrefix = '`mongodb://localhost:27017/';
const dbName = 'portfolioBuilder';
const SESSION_SECRET = "asdklfjqo31";


const startServer = async () => {
    const app = express();

    

    await mongoose.connect(`${mongoPrefix}${dbName}`, { 
        useNewUrlParser: true
    });

    app.use(
        session({
            name: 'session',
            secret: SESSION_SECRET,
            resave: false,
            saveUninitialized: true,
            store: MongoStore.create({ mongoUrl:`${mongoPrefix}${dbName}` }),
            cookie: {
                httpOnly: true,
                secure: false,
                // secure: process.env.NODE_ENV === "production",
                maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
            },
        }),
    );
    
    
    const corsOptions = {
        // origin: 'http://localhost:3000',
        credentials: true,
        methods: ['GET', 'PUT', 'POST', 'OPTIONS'],
    };
    
    app.use(cors(corsOptions));
    
    const apollo = new ApolloServer({
        typeDefs,
        resolvers,
        // engine: false,
        context: ({ req }) => {
            // console.log('req:', req)
            return { req }
        },
        // tracing: true,
        // debug: !process.env.PRODUCTION,
        // introspection: !process.env.PRODUCTION,
    });
    
    await apollo.start()

    apollo.applyMiddleware({
        app,
        path: '/',
        cors: corsOptions,
    });
    
    app.listen(port, () => {
        console.log('runing..');
    });
}

startServer();