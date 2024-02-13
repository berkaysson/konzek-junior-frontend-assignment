import { useState } from "react";
import { Country } from "../../models/Country";
import { Data } from "../../models/Data";
import Filter from "../Filter/Filter";
import List from "./List";

interface CountryListContainerProps {
  data: {
    countries: Country[];
  };
}

const CountryListContainer: React.FC<CountryListContainerProps> = ({
  data,
}) => {
  const [filter, setFilter] = useState<string>("");

  const filteredCountries: Data | undefined = data
  ? { countries: data.countries.filter((country) =>
      country.name.toLowerCase().includes(filter.toLowerCase())
    )}
  : { countries: []};

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };
  
  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <List data={filteredCountries} />
    </div>
  );
};

export default CountryListContainer;
