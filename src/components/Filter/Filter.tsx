import React, { useState } from "react";

interface FilterProps {
  onFilterChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [filterValue, setFilterValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterValue(value);
    onFilterChange(value);
  };

  return (
    <div>
      <label htmlFor="filter">Filter:</label>
      <input
        type="text"
        id="filter"
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
