/**
 * This hook provides access to the data context, allowing components to consume data and functions from the context.
 * It uses the useContext hook to access the DataContext.
 * If the hook is used outside of a DataProvider, it throws an error.
 * Returns the context object containing data and functions.
 */

import { useContext } from "react";
import { DataContext, DataContextType } from "../contexts/DataContext";

const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export default useData;
