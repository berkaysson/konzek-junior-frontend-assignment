import React, { ReactNode, useState } from "react";
import { Country } from "../../models/Country";
import "../../styles/ListItem.css";
import { Color } from "./List";
import useData from "../../hooks/useData";
import { PiCaretDownBold, PiCaretUpBold, PiCheck } from "react-icons/pi";
import { PiCopyDuotone } from "react-icons/pi";

interface ListItemProps {
  country: Country;
  backgroundColor: Color;
}

const ListItem: React.FC<ListItemProps> = ({ country, backgroundColor }) => {
  const { checked, handleCheckedToggle } = useData();
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [copyButtonIcon, setcopyButtonIcon] = useState<ReactNode>(<PiCopyDuotone />);
  const isItemChecked: boolean = checked === country.code;

  const copyCountryInfo = (): void => {
    const countryInfo: string = `${country.name}, ${country.code}, ${
      country.continent?.name
    }, ${country.currency}, ${country.emoji}, ${country.languages
      ?.map((language) => `${language.name} (${language.code})`)
      .join(", ")}, ${country.native}, ${country.phone}, ${country.states
      ?.map((state) => `${state.name} (${state.code})`)
      .join(", ")}`;
    navigator.clipboard.writeText(countryInfo);
    setcopyButtonIcon(<PiCheck />);
    setTimeout(() => {
      setcopyButtonIcon(<PiCopyDuotone />);
    }, 1000);
  };

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
        <input
          type="checkbox"
          checked={isItemChecked}
          onChange={() => handleCheckedToggle(country.code)}
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
        <button
          className="details-toggle-button list-item-button"
          onClick={() => setShowDetails(!showDetails)}
        >
          {!showDetails ? <PiCaretDownBold /> : <PiCaretUpBold />}
        </button>
        <button
          onClick={copyCountryInfo}
          className="copy-button list-item-button"
        >
          {copyButtonIcon}
        </button>
      </div>
    </li>
  );
};

export default ListItem;
