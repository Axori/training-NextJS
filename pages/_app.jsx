import React from 'react';
import NavBar from "../components/NavBar.jsx";
import "../styles/globals.css";

const App = ({Component, pageProps}) => (
  <>
    <header>
      <NavBar />
    </header>
    <Component {...pageProps} />
  </>
);

export default App;