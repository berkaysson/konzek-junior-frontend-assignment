import React from "react";
import "../../styles/Filter.css";
import useData from "../../hooks/useData";

const Filter: React.FC = () => {
  const { filterValue, filterCriteria, handleFilterValueChange, handleCriteriaChange } = useData();

  return (
    <div className="filter-container">
      <label htmlFor="filter" className="filter-label">Filter:</label>
      <input
        className="filter-input"
        type="text"
        id="filter"
        name="filter"
        value={filterValue}
        onChange={handleFilterValueChange}
      />
      <label htmlFor="filter-option" className="filter-label">By:</label>
      <select value={filterCriteria} onChange={handleCriteriaChange} name="filter-option">
        <option value="name">Name</option>
        <option value="code">Code</option>
        <option value="continent">Continent</option>
        <option value="currency">Currency</option>
        <option value="native">Native</option>
        <option value="phone">Phone</option>
        <option value="languages">Languages</option>
      </select>
    </div>
  );
};

export default Filter;
