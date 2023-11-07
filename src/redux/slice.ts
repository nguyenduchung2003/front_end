import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const slice = createSlice({
     name: "test",
     initialState: 0,
     reducers: {
          increment(state, action: PayloadAction<number>) {
               return state + action.payload
          },
          decrement(state, action) {
               return state + action.payload
          },
     },
})
export const { increment, decrement } = slice.actions
export default slice.reducer
