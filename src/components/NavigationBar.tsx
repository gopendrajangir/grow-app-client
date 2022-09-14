import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/img/logo.png';
import Icon from './Icon';
import LinkButton from './LinkButton';

import ThemeSeletor from './ThemeSeletor';
import { ThemeContext } from '../context/themeContext';

const NavigationBar: React.FC = () => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div className="border border-b-1 border-slate-100 flex h-16 flex items-center px-4 dark:bg-slate-900 dark:border-none">
      <Link to="/">
        <img src={Logo} alt="logo" className="h-8 aspect-auto" />
      </Link>
      {/* <LinkButton to="/employees/create" className="ml-auto">
        <Icon className="h-6 w-6 mr-1 fill-button-text" icon="add" />
        <span className="text-sm text-button-text">Create Employee</span>
      </LinkButton> */}
      <ThemeSeletor
        className="ml-auto p-1.5 !rounded-full gap-x-2 bg-sky-900 dark:bg-slate-100"
        setTheme={setTheme}
      />
    </div>
  );
};

export default NavigationBar;
