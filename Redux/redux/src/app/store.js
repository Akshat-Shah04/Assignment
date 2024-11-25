import { configureStore } from '@reduxjs/toolkit'
import crudSlice from '../features/crudSlice'

export default configureStore({
  reducer: {
    crudApp: crudSlice,
  },
})