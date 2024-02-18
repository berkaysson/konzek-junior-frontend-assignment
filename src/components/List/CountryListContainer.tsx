import { useMemo, useState } from "react";
import { Country } from "../../models/Country";
import { Data } from "../../models/Data";
import Filter from "../Filter/Filter";
import List from "./List";
import { memoizedFilter } from "../../utils/filterUtils";
import "../../styles/CountryListContainer.css";

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

  const filteredCountries: Data | undefined = useMemo(() => {
    if (!data) return { countries: [] };
    return {
      countries: memoizedFilter(
        data.countries,
        filterCriteria,
        filterValue.toLowerCase()
      ),
    };
  }, [data, filterCriteria, filterValue]);

  const handleFilterChange = (value: string, criteria: keyof Country) => {
    setFilterValue(value);
    setFilterCriteria(criteria);
  };

  return (
    <div className="country-list-container">
      <Filter onFilterChange={handleFilterChange} />
      <List data={filteredCountries} />
    </div>
  );
};

export default CountryListContainer;
