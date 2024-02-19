import useData from "../hooks/useData";
import { Country } from "../models/Country";
import "../styles/SelectedCountryDisplay.css";

const SelectedCountryDisplay: React.FC = () => {
  const { checked, filteredCountries } = useData();

  const selectedCountry = filteredCountries?.countries.find(
    (country: Country) => country.code === checked
  );

  return (
    <>
      {checked && (
        <div className="selected-country-display">
          {selectedCountry && (
            <>
              <h2>Selected Country</h2>
              <p>
                Name: {selectedCountry.name} ({selectedCountry.code})
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default SelectedCountryDisplay;
