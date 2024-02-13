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
  const [filterValue, setFilterValue] = useState<string>("");
  const [filterCriteria, setFilterCriteria] = useState<keyof Country>("name");

  const filteredCountries: Data | undefined = data
    ? {
        countries: data.countries.filter((country: Country) => {
          const property = country[filterCriteria];
          if (typeof property === "string") {
            return property.toLowerCase().includes(filterValue.toLowerCase());
          }
          return false;
        }),
      }
    : { countries: [] };

  const handleFilterChange = (value: string, criteria: keyof Country) => {
    setFilterValue(value);
    setFilterCriteria(criteria);
  };
  
  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <List data={filteredCountries} />
    </div>
  );
};

export default CountryListContainer;
