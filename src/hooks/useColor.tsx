import { useEffect, useState } from "react";

const COLORS: string[] = [
  "#ff5883",
  "#0d7a7c",
  "#2f7cf8",
  "#2aa75a",
  "#532c1e",
  "#14452f",
  "#2d0065"
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