/**
 * Component representing a single country item in the list.
 * @param country The country object to display.
 * @param backgroundColor The background color of the item.
 */

import React, { useState } from "react";
import { Country } from "../../../models/Country";
import "../../../styles/ListItem.css";
import useData from "../../../hooks/useData";
import ListItemButtons from "./ListItemButtons";
import ListItemDetails from "./ListItemDetails";
import { Color } from "../../../hooks/useColor";

interface ListItemProps {
  country: Country;
  backgroundColor: Color;
}

const ListItem: React.FC<ListItemProps> = ({ country, backgroundColor }) => {
  const { checked, handleCheckedToggle } = useData();
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const isItemChecked: boolean = checked === country.code;

  return (
    <li
      className={`list-item ${isItemChecked ? "selected" : ""}`}
      style={isItemChecked ? { backgroundColor: backgroundColor } : {}}
    >
      <div
        className="toggle-select"
        onClick={() => handleCheckedToggle(country.code)}
        style={{ cursor: "pointer" }}
      >
        <div>
          <strong>Name:</strong> {country.name} <strong>Code:</strong>{" "}
          {country.code}
        </div>
        {showDetails && <ListItemDetails country={country} />}
      </div>
      <ListItemButtons
        country={country}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
      />
    </li>
  );
};

export default ListItem;
