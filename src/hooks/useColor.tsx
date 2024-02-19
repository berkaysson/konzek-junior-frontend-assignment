/**
 * This hook manages the selection of background colors from a predefined set of colors.
 * It takes a trigger as an argument, which can be used to force a color change when the trigger value changes.
 * Returns the currently selected background color.
 */

import { useEffect, useState } from "react";

// Predefined set of colors
const COLORS: string[] = [
  "#ff5883",
  "#0d7a7c",
  "#2f7cf8",
  "#2aa75a",
  "#532c1e",
  "#14452f",
  "#2d0065"
];

// Define the type for a color
export type Color = (typeof COLORS)[number];

const useColor = (trigger: any): Color => {
  const [backgroundColor, setBackgroundColor] = useState<Color>(COLORS[0]);

  // Function to get the next color in the array
  const getNextColor = (): Color => {
    const currentIndex = COLORS.indexOf(backgroundColor);
    const nextIndex = (currentIndex + 1) % COLORS.length;
    return COLORS[nextIndex];
  };

  // Effect to change the background color when the trigger value changes
  useEffect(() => {
    const newColor = getNextColor();
    setBackgroundColor(newColor);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return backgroundColor;
};

export default useColor;