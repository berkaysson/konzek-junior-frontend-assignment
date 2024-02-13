import React from "react";
import ListItem from "./ListItem";
import { Country } from "../../models/Country";

interface ListProps {
  data: {
    countries: Country[];
  };
}

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <div>
      <h2>Country List</h2>
      <ul>
        {data.countries.map((country: { code: string; name: string }) => (
          <ListItem key={country.code} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default List;
