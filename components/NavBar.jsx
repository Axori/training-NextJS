import React from 'react';
import Link from "next/link";

const NavBar = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;