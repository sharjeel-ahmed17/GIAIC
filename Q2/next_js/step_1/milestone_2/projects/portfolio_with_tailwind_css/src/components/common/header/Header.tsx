'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X, House, BookOpen, CircleUser } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: <House size={20} className="text-white" /> },
  { href: '/about', label: 'About', icon: <BookOpen className="text-white" /> },
  { href: '/contact', label: 'Contact', icon: <CircleUser className="text-white" /> },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-800 text-white shadow-md">
      <nav className="flex items-center justify-between p-4 md:px-6">
        <Link href="/" className="text-xl font-bold text-white">
          Sharjeel Ahmed
        </Link>
        <button
          type="button"
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 items-center mt-4 md:mt-0 space-y-4 md:space-y-0">
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
    <li className="flex items-center space-x-2">
      <Link href={href} className="flex items-center text-white hover:text-gray-400">
        {icon} <span>{label}</span>
      </Link>
    </li>
  );
};
