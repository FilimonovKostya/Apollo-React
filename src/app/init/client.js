// Core
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {createHttpLink} from "apollo-link-http";

// GraphQL Server
const uri = "https://funded-pet-library.moonhighway.com/"
const link = createHttpLink({uri})

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
})