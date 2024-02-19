import React from "react";

const Header: React.FC = () => {
  return (
    <header id="header">
      <h1>Konzek Assignment App - Junior Front End Developer</h1>
      <p>
        The app is a single-page web application built with React, allowing
        users to browse and interact with a list of countries sourced from a
        public GraphQL API. It features a responsive design, enabling easy usage
        across devices. Users can filter and group the displayed country data,
        select individual countries, and view detailed information about each
        selected country.
      </p>
    </header>
  );
};

export default Header;
