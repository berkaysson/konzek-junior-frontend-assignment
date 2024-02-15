import React, { useEffect, useState } from "react";
import { Country } from "../../models/Country";

interface FilterProps {
  onFilterChange: (value: string, criteria: keyof Country) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [filterValue, setFilterValue] = useState<string>("");
  const [filterCriteria, setFilterCriteria] = useState<keyof Country>("name"); // Default filter criteria is "name"

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterValue(value);
  };

  const handleCriteriaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as keyof Country;
    setFilterCriteria(value);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      onFilterChange(filterValue, filterCriteria);
    }, 300);

    return () => clearTimeout(debounce);
  }, [filterValue, filterCriteria, onFilterChange]);

  return (
    <div>
      <label htmlFor="filter">Filter:</label>
      <input
        type="text"
        id="filter"
        value={filterValue}
        onChange={handleValueChange}
      />
      <select value={filterCriteria} onChange={handleCriteriaChange}>
        <option value="name">Name</option>
        <option value="code">Code</option>
        <option value="continent">Continent</option>
        <option value="currency">Currency</option>
        <option value="native">Native</option>
        <option value="phone">Phone</option>
      </select>
    </div>
  );
};

export default Filter;
