import React from "react";
import ListItem from "./ListItem/ListItem";
import "../../styles/List.css";
import useData from "../../hooks/useData";
import useColor from "../../hooks/useColor";

const List: React.FC = () => {
  const { filteredCountries, checked } = useData();
  const backgroundColor = useColor(checked);
  
  return (
    <div>
      <ul className="list-container">
        {filteredCountries?.countries.map((country: { code: string; name: string }) => (
          <ListItem key={country.code} country={country} backgroundColor={backgroundColor} />
        ))}
      </ul>
    </div>
  );
};

export default List;
