import React from 'react';
import NavBar from "../components/NavBar.jsx";

const App = ({Component, pageProps}) => (
  <>
    <NavBar />
    <Component {...pageProps} />
  </>
);

export default App;