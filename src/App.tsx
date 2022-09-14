import { useContext } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';

import { ThemeContext } from './context/themeContext';

import HomePage from './pages/HomePage';

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} h-screen max-h-screen`}>
      <Router>
        <NavigationBar />
        <div className="max-h-[calc(100vh-64px)] h-[calc(100vh-64px)] bg-slate-50 dark:bg-slate-800">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
