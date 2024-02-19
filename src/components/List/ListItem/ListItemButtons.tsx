import { ReactNode, useState } from "react";
import { PiCaretDownBold, PiCaretUpBold, PiCheck } from "react-icons/pi";
import { PiCopyDuotone } from "react-icons/pi";
import { Country } from "../../../models/Country";

interface ListItemButtonsProps {
  country: Country;
  showDetails: boolean;
  setShowDetails: (showDetails: boolean) => void;
}

const ListItemButtons: React.FC<ListItemButtonsProps> = ({
  country,
  showDetails,
  setShowDetails,
}) => {
  const [copyButtonIcon, setcopyButtonIcon] = useState<ReactNode>(
    <PiCopyDuotone />
  );
  
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
  );
};

export default ListItemButtons;
