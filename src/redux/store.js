import { phonebookReducer } from './phonebook';
import { authReducer } from './auth';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

const store = configureStore({
  reducer: {
    auth: authReducer,
    phonebook: phonebookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// const storeObj = {
//   store,
//   persistor,
// };

export default store;
