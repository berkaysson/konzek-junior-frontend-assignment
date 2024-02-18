import Filter from "../Filter/Filter";
import List from "./List";
import "../../styles/CountryListContainer.css";

const CountryListContainer: React.FC= () => {

  return (
    <div className="country-list-container">
      <Filter />
      <List />
    </div>
  );
};

export default CountryListContainer;
