/**
 * Entry point of the React application.
 * Renders the root component into the DOM.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import DataProvider from "./contexts/DataContext";

// GraphQL endpoint URI for Public Countries API
// https://studio.apollographql.com/public/countries/home?variant=current
const URI = "https://countries.trevorblades.com/graphql/";

interface ApolloClientOptions {
  uri: string;
  cache: InMemoryCache;
}

const clientOptions: ApolloClientOptions = {
  uri: URI,
  cache: new InMemoryCache(),
};

const client = new ApolloClient(clientOptions);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* Wrapping the root component with ApolloProvider to provide Apollo Client functionality */}
    <ApolloProvider client={client}>
      {/* Wrapping the root component with DataProvider to provide data context */}
      <DataProvider>
        <App />
      </DataProvider>
    </ApolloProvider>
  </React.StrictMode>
);
