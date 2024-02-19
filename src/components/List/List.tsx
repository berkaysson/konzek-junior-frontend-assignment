import React, { useEffect, useState } from "react";
import ListItem from "./ListItem/ListItem";
import "../../styles/List.css";
import useData from "../../hooks/useData";

const COLORS: string[] = [
  "#ff5883",
  "#79d3be",
  "#fec9d7",
  "#b9eee1",  
  "#ff91ad",
  "#39b89a",
];


export type Color = typeof COLORS[number];

const List: React.FC = () => {
  const { filteredCountries, checked } = useData();
  const [backgroundColor, setBackgroundColor] = useState<Color>(COLORS[0]);

  const getNextColor = (): Color => {
    const currentIndex = COLORS.indexOf(backgroundColor);
    const nextIndex = (currentIndex + 1) % COLORS.length;
    return COLORS[nextIndex];
  }

  useEffect(() => {
    const newColor = getNextColor();
    setBackgroundColor(newColor);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);
  
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
