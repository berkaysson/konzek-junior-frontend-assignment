import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./graphql/queries";
import { Data } from "./models/Data";
import CountryListContainer from "./components/List/CountryListContainer";

const App: React.FC = () => {
  const { data, loading, error } = useQuery<Data>(GET_COUNTRIES);

  if (loading) return <div>Loading...</div>;
  if (error) return <pre>{error.message}</pre>;

  return (
    <div className="app-container">
      <h1>Country List</h1>
      {data && <CountryListContainer data={data} />}
    </div>
  );
};

export default App;
