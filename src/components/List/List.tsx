import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { Country } from "../../models/Country";

interface ListProps {
  data: {
    countries: Country[];
  };
}

const List: React.FC<ListProps> = ({ data }) => {
  const [checked, setChecked] = useState<string>("");

  const handleToggle = (code: string) => {
    if(checked === code) setChecked("");
    else setChecked(code);
  }

  return (
    <div>
      <h2>Country List</h2>
      <ul>
        {data.countries.map((country: { code: string; name: string }) => (
          <ListItem key={country.code} country={country} checked={checked} onToggle={handleToggle} />
        ))}
      </ul>
    </div>
  );
};

export default List;
