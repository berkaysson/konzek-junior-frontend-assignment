/**
 * This component manages the application data and provides it to the child components through context.
 * It uses Apollo Client's useQuery hook to fetch data from the GraphQL API.
 * It also handles filtering and selecting countries based on user input.
 * The component defines a context called DataContext to provide data to its children.
 */

import { useQuery } from "@apollo/client";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { Data } from "../models/Data";
import { GET_COUNTRIES } from "../graphql/queries";
import { Country } from "../models/Country";
import { memoizedFilter } from "../utils/filterUtils";

export type DataContextType = {
  data: Data | undefined;
  loading: boolean;
  error: Error | undefined;
  filterValue: string;
  filterCriteria: keyof Country;
  filteredCountries: Data | undefined;
  checked: string;
  handleFilterValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCriteriaChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleCheckedToggle: (code: string) => void;
};

export const DataContext = createContext<DataContextType | null>(null);

/**
 * DataProvider component fetches data, manages state, and provides data to child components through context.
 */
const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, loading, error } = useQuery<Data>(GET_COUNTRIES);
  const [filterValue, setFilterValue] = useState<string>("");
  const [filterCriteria, setFilterCriteria] = useState<keyof Country>("name");
  const [checked, setChecked] = useState<string>("");

  /**
   * Memoized filtered countries based on filter criteria and value.
   */
  const filteredCountries: Data | undefined = useMemo(() => {
    if (!data) return { countries: [] };
    return {
      countries: memoizedFilter(
        data.countries,
        filterCriteria,
        filterValue.toLowerCase()
      ),
    };
  }, [data, filterCriteria, filterValue]);

  /**
   * Handles filter value and criteria change
   */
  const handleFilterChange = (value: string, criteria: keyof Country) => {
    setFilterValue(value);
    setFilterCriteria(criteria);
  };

  /**
   * Handles toggle of checked item.
   */
  const handleCheckedToggle = (code: string) => {
    if (checked === code) setChecked("");
    else setChecked(code);
  };

  /**
   * Handles change in filter value.
   */
  const handleFilterValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setFilterValue(value);
  };

  /**
   * Handles change in filter criteria.
   */
  const handleCriteriaChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value as keyof Country;
    setFilterCriteria(value);
  };

  /**
   * Debounce for change in filter criteria or value
   */
  useEffect(() => {
    const debounce = setTimeout(() => {
      handleFilterChange(filterValue, filterCriteria);
    }, 300);

    return () => clearTimeout(debounce);
  }, [filterValue, filterCriteria]);

  /**
   * Updates checked state after filtering.
   */
  useEffect(() => {
    if (filteredCountries && filteredCountries.countries.length > 0) {
      const index = Math.min(9, filteredCountries.countries.length - 1);
      const code = filteredCountries.countries[index].code;
      setChecked(code);
    }
  }, [filteredCountries]);

  /**
   * Memoized values to be provided by the context.
   */
  const values = useMemo(
    () => ({
      data,
      loading,
      error,
      filterValue,
      filterCriteria,
      filteredCountries,
      checked,
      handleFilterValueChange,
      handleCriteriaChange,
      handleCheckedToggle,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      checked,
      data,
      error,
      filterCriteria,
      filterValue,
      filteredCountries,
      loading,
    ]
  );

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataProvider;
