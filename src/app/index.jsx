// Core
import React from "react";
import {ApolloProvider} from "@apollo/react-hooks";

// Components
import {Customer} from "./bus/customer";

// Other
import {client} from "./init/client";

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <Customer/>
        </ApolloProvider>
    )
}