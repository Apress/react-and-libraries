// src/redux/store.ts

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import prefSlice from '../features/Preferences/preferencesSlice'

const store = configureStore({
  reducer: combineReducers({
    preferences: prefSlice,
  }),
})

export default store
