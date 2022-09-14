import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './slices';

export const store = configureStore({
  preloadedState: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  reducer
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>
