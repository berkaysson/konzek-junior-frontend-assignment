/**
 * Component for filtering the list of countries.
 */

import React from "react";
import "../../styles/Filter.css";
import useData from "../../hooks/useData";

const Filter: React.FC = () => {
  const {
    filterValue,
    filterCriteria,
    handleFilterValueChange,
    handleCriteriaChange,
  } = useData();

  return (
    <div className="filter-container">
      <label htmlFor="filter" className="filter-label">
        Filter:
        <input
          className="filter-input"
          type="text"
          id="filter"
          name="filter"
          value={filterValue}
          onChange={handleFilterValueChange}
        />
      </label>
      <label htmlFor="filter-option" className="filter-label">
        By:
        <select
          className="filter-input filter-select"
          value={filterCriteria}
          onChange={handleCriteriaChange}
          name="filter-option"
          id="filter-option"
        >
          <option value="name">Name</option>
          <option value="code">Code</option>
          <option value="continent">Continent</option>
          <option value="currency">Currency</option>
          <option value="native">Native</option>
          <option value="phone">Phone</option>
          <option value="languages">Languages</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
