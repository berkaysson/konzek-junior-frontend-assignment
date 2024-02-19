/**
 * Component to display the details of the selected country.
 * Has Sticky position to top of the site.
 */

import useData from "../hooks/useData";
import { Country } from "../models/Country";
import "../styles/SelectedCountryDisplay.css";

const SelectedCountryDisplay: React.FC = () => {
  const { checked, filteredCountries } = useData();

  // Find the selected country from the list of filtered countries
  const selectedCountry = filteredCountries?.countries.find(
    (country: Country) => country.code === checked
  );

  return (
    <div className="selected-country-display">
      <h2>{selectedCountry ? "Selected Country" : "No selected Country"}</h2>
      <p>
        {selectedCountry
          ? `Name: ${selectedCountry.name} (${selectedCountry.code})`
          : "Click on a Country"}
      </p>
    </div>
  );
};

export default SelectedCountryDisplay;
