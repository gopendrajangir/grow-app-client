import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './assets/css/index.css';

import { store } from './store';

import { ThemeContextProvider } from './context/themeContext';

import App from './App';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </Provider>
);
