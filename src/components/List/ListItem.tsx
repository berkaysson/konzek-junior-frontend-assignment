import React from "react";
import { Country } from "../../models/Country";

interface ListItemProps {
  country: Country;
}

const ListItem: React.FC<ListItemProps> = ({ country }) => {
  return (
    <li>
      <div>
        <strong>Name:</strong> {country.name}
      </div>
      <div>
        <strong>Code:</strong> {country.code}
      </div>
      <div>
        <strong>Continent:</strong> {country.continent?.name} ({country.continent?.code})
      </div>
      <div>
        <strong>Currency:</strong> {country.currency}
      </div>
      <div>
        <strong>Emoji:</strong> {country.emoji}
      </div>
      <div>
        <strong>Languages:</strong> {country.languages?.map(language => `${language.name} (${language.code})`).join(', ')}
      </div>
      <div>
        <strong>Native:</strong> {country.native}
      </div>
      <div>
        <strong>Phone:</strong> {country.phone}
      </div>
      <div>
        <strong>States:</strong> {country.states?.map(state => `${state.name} (${state.code})`).join(', ')}
      </div>
    </li>
  );
};

export default ListItem;