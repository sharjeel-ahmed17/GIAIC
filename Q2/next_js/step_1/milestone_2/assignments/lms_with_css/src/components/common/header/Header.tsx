import Link from "next/link";
import React from "react";
// import styles from '@/components/component.module.css';
import './header.css'

const Header = () => {
  return (
    <header>
      {/* logo */}
      <div>
        
        <img src="logo.png" alt="giaic" />
      </div>
      {/* navigation list */}
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* action buttton */}
      <div>
        <button>sign up</button>
      </div>
    </header>
  );
};

export default Header;
