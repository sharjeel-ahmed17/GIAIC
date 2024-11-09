
'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import './header.css';
import { Menu, X, House, BookOpen, CircleUser } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: <House size={20} color='white'/> },
  { href: '/about', label: 'About', icon: <BookOpen /> },
  { href: '/contact', label: 'Contact', icon: <CircleUser /> },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="portfolio-header">
      <nav className="nav-container">
     
        <Link href="/" className="portfolio-logo">
   Sharjeel Ahmed
        </Link>
        <button
          type="button"
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <NavItem key={index} href={item.href} label={item.label} icon={item.icon} />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

interface INavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const NavItem: React.FC<INavItem> = ({ href, label, icon }) => {
  return (
    <li className='nav-item'>
      <Link href={href} className="nav-link">
        {icon} {label}
      </Link>
    </li>
  );
};
