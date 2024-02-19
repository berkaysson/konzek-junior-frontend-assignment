import React from "react";
import CountryListContainer from "./components/List/CountryListContainer";
import "./styles/colors.css";
import "./styles/App.css";
import useData from "./hooks/useData";
import SelectedCountryDisplay from "./components/SelectedCountryDisplay";
import Header from "./components/Header";

const App: React.FC = () => {
  const { data, loading, error } = useData();

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <pre className="error-message">{error.message}</pre>;

  return (
    <div className="app-container">
      <SelectedCountryDisplay />
      <Header />
      {data && <CountryListContainer />}
    </div>
  );
};

export default App;
