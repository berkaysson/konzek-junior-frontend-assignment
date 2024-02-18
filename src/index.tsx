import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import DataProvider from "./contexts/DataContext";

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
    <ApolloProvider client={client}>
      <DataProvider>
        <App />
      </DataProvider>
    </ApolloProvider>
  </React.StrictMode>
);
