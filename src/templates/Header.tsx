import { motion } from 'framer-motion';
import React from 'react';

import { Button } from '../button/Button';
import { Logo } from './Logo';

interface HeaderProps {
  scrollToSection: (
    ref: React.RefObject<HTMLDivElement>,
    offset?: number,
  ) => void;
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  introduceRef: React.RefObject<HTMLDivElement>;
  joinRef: React.RefObject<HTMLDivElement>;
  currentSection?: string;
}

const Header: React.FC<HeaderProps> = ({
  scrollToSection,
  homeRef,
  aboutRef,
  introduceRef,
  joinRef,
}) => {
  const navItems = [
    { name: 'Home', ref: homeRef, offset: 0 },
    { name: 'About', ref: aboutRef, offset: -120 },
    { name: 'Introduce', ref: introduceRef, offset: -50 },
    { name: 'Join', ref: joinRef, offset: 0 },
  ];

  return (
    <div
      style={{ backdropFilter: 'blur(25px)' }}
      className="relative top-0 z-50 flex h-[56px] items-center justify-between bg-[rgba(8,1,23,0.7)] px-[24px] sm:sticky sm:h-[88px] sm:px-[50px] sm:py-[17.5px]"
    >
      <Logo />
      <div className="hidden sm:block">
        <nav className="flex h-[48px] w-[568px] justify-around bg-[url('/assets/images/home/header-nav-bg.png')] bg-[length:100%_100%] bg-no-repeat px-[50px]">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.ref, item.offset)}
              className={`h-[44px] w-[84px] bg-[length:100%_100%] bg-no-repeat transition-all duration-300 hover:bg-[url('/assets/images/home/nav-btn-bg.png')] `}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex items-center">
        <a
          href="https://app.omnimuse.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button classProp="hidden sm:block w-[224px] h-[106px] leading-[106px] text-[16px] font-bold">
              Launch App
            </Button>
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export { Header };
