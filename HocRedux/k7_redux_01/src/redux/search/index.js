// slice - split
import { createSlice } from "@reduxjs/toolkit"

const initState = {
    name: null,
    priority: null
}

const searchSlice = createSlice({
    name: 'search',
    initialState: initState,
    reducers: {
        updatePriority: (state, action) => {
            state.priority = action.payload
        },
        updateName: (state, action) => {
            state.name = action.payload
        }
    }
})

export default searchSlice