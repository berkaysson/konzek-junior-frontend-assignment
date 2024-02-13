import React, { useState } from "react";
import List from "./components/List/List";
import Filter from "./components/Filter/Filter";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "./graphql/queries";
import { Country } from "./models/Country";

interface Data {
  countries: Country[]
}

const App: React.FC = () => {
  const { data, loading, error } = useQuery<Data>(
    GET_COUNTRIES
  );

  const [filter, setFilter] = useState<string>("");

  const filteredCountries: Data | undefined = data
  ? { countries: data.countries.filter((country) =>
      country.name.toLowerCase().includes(filter.toLowerCase())
    )}
  : { countries: []};

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <pre>{error.message}</pre>;

  return (
    <div className="app-container">
      <h1>Country List</h1>
      <Filter onFilterChange={handleFilterChange} />
      {data && <List data={filteredCountries} />}
    </div>
  );
};

export default App;
