import React from 'react';
import NavBar from "../components/NavBar.jsx";
import "../styles/globals.css";

const App = ({Component, pageProps}) => (
  <>
    <header>
      <NavBar />
    </header>
    <Component {...pageProps} />
    <ul>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ul>
  </>
);

export default App;