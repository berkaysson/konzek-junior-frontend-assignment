import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { Country } from "../../models/Country";
import "../../styles/List.css";

const COLORS: string[] = [
  "#ff5883",
  "#79d3be",
  "#fec9d7",
  "#b9eee1",  
  "#ff91ad",
  "#39b89a",
];

interface ListProps {
  data: {
    countries: Country[];
  };
}

export type Color = typeof COLORS[number];

const List: React.FC<ListProps> = ({ data }) => {
  const [checked, setChecked] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<Color>(COLORS[0]);

  const handleToggle = (code: string) => {
    if(checked === code) setChecked("");
    else setChecked(code);
  }

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
        {data.countries.map((country: { code: string; name: string }) => (
          <ListItem key={country.code} country={country} checked={checked} onToggle={handleToggle} backgroundColor={backgroundColor} />
        ))}
      </ul>
    </div>
  );
};

export default List;
