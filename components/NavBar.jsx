import React from 'react';
import Link from "next/link";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/">Home</Link>
      </li>
    </ul>
    <style jsx>
      {`
        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          display: inline;
        }

        li:not(:first-child) {
          margin-left: 1rem;
        }
      `}
    </style>
  </nav>
);

export default NavBar;