/**
 * The main component of the application, responsible for rendering
 * the header, selected country display, and the list of countries.
 * It fetches data using the useData hook and handles loading and error states.
 */

import React from "react";
import CountryListContainer from "./components/List/CountryListContainer";
import "./styles/colors.css";
import "./styles/App.css";
import useData from "./hooks/useData";
import SelectedCountryDisplay from "./components/SelectedCountryDisplay";
import Header from "./components/Header";

const App: React.FC = () => {
  // Fetch data using the useData hook
  const { data, loading, error } = useData();

  // Render loading indicator if data is still loading
  if (loading) return <div className="loading">Loading...</div>;

  // Render error message if an error occurs during data fetching
  if (error) return <pre className="error-message">{error.message}</pre>;

  // Render the main application components after data loading
  return (
    <div className="app-container">
      <SelectedCountryDisplay />
      <Header />
      {data && <CountryListContainer />}
    </div>
  );
};

export default App;
