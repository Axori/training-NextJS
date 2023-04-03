import React from 'react';

const DarkTheme = () => (
  <style jsx global>{`
    :root {
      --background-color: black;
      --text-color: white;
      --link-color: #ffaa00;
    }`}</style>
);

export default DarkTheme;
