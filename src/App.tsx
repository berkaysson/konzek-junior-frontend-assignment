import React from "react";
import CountryListContainer from "./components/List/CountryListContainer";
import "./styles/App.css";
import useData from "./hooks/useData";

const App: React.FC = () => {
  const { data, loading, error } = useData();

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <pre className="error-message">{error.message}</pre>;

  return (
    <div className="app-container">
      <h1>Country List</h1>
      {data && <CountryListContainer />}
    </div>
  );
};

export default App;
