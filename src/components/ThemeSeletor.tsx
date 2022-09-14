import React from 'react';

import { ThemeValue } from '../context/themeContext';
import Icon from './Icon';

import TabSelector from './TabSelector';
import Tab from './TabSelector/Tab';

interface ThemeSelectorProps {
  className?: string;
  setTheme: ThemeValue['setTheme'];
}

const ThemeSeletor: React.FC<ThemeSelectorProps> = ({
  setTheme,
  className,
}) => {
  return (
    <TabSelector
      className={className}
      gliderClassName="!rounded-full bg-slate-50 dark:bg-slate-900"
      selectedTabClassName="!fill-sky-900 dark:!fill-slate-100"
    >
      <Tab
        className="h-7 w-7 rounded-full bg-theme-toggler-tab fill-slate-50 dark:fill-slate-900"
        clickHandler={() => setTheme && setTheme('')}
      >
        <Icon className="h-5 w-5 fill-inherit" icon="wb_sunny" />
      </Tab>
      <Tab
        className="h-7 w-7 rounded-full bg-theme-toggler-tab fill-slate-50 dark:fill-slate-900"
        clickHandler={() => setTheme && setTheme('dark')}
      >
        <Icon className="h-5 w-5 fill-inherit" icon="brightness" />
      </Tab>
    </TabSelector>
  );
};

export default ThemeSeletor;
