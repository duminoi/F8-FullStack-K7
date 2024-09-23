import {createStore, combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit' 
import searchSlice from './search' 
import subjectSlice from './subject'


const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        subjects: subjectSlice.reducer,
    }
  })

export default store