import React, { useState } from "react";
import { Country } from "../../models/Country";
import "../../styles/ListItem.css";

interface ListItemProps {
  country: Country;
  checked: string;
  onToggle: (code: string) => void;
}

const ListItem: React.FC<ListItemProps> = ({ country, checked, onToggle }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <li className={`list-item ${checked === country.code ? "selected":""}`}>
      <div className="toggle-select" onClick={() => onToggle(country.code)} style={{ cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={checked === country.code}
          onChange={() => onToggle(country.code)}
        />
        <div>
          <strong>Name:</strong> {country.name} <strong>Code:</strong>{" "}
          {country.code}
        </div>
        {showDetails ? (
          <>
            <div>
              <strong>Continent:</strong> {country.continent?.name} (
              {country.continent?.code})
            </div>
            <div>
              <strong>Currency:</strong> {country.currency}
            </div>
            <div>
              <strong>Emoji:</strong> {country.emoji}
            </div>
            <div>
              <strong>Languages:</strong>{" "}
              {country.languages
                ?.map((language) => `${language.name} (${language.code})`)
                .join(", ")}
            </div>
            <div>
              <strong>Native:</strong> {country.native}
            </div>
            <div>
              <strong>Phone:</strong> {country.phone}
            </div>
            <div>
              <strong>States:</strong>{" "}
              {country.states
                ?.map((state) => `${state.name} (${state.code})`)
                .join(", ")}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="list-item-button-container">
        <button className="details-toggle-button list-item-button" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide" : "Show"} Details
        </button>
        <button className="copy-button list-item-button">
          Copy
        </button>
      </div>
    </li>
  );
};

export default ListItem;
