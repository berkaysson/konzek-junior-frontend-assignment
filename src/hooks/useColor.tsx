import { useEffect, useState } from "react";

const COLORS: string[] = [
  "#ff5883",
  "#79d3be",
  "#fec9d7",
  "#b9eee1",
  "#ff91ad",
  "#39b89a",
];

export type Color = (typeof COLORS)[number];

const useColor = (trigger: any): Color => {
  const [backgroundColor, setBackgroundColor] = useState<Color>(COLORS[0]);

  const getNextColor = (): Color => {
    const currentIndex = COLORS.indexOf(backgroundColor);
    const nextIndex = (currentIndex + 1) % COLORS.length;
    return COLORS[nextIndex];
  };

  useEffect(() => {
    const newColor = getNextColor();
    setBackgroundColor(newColor);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return backgroundColor;
};

export default useColor;