import React, { PropsWithChildren, useState } from 'react';

export type ThemeValue = {
  theme: string;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeContext = React.createContext<ThemeValue>({ theme: '' });

const ThemeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState('');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
