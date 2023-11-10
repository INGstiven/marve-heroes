/* eslint-disable no-debugger */
import { createSlice } from '@reduxjs/toolkit'
export interface HeroesSearch{
  HeroName?: string;
}
const ininitalState: string ="";
export const searchSlice = createSlice({
  name: 'heroes',
  initialState: ininitalState,
  reducers: {
    setSearchedhero: (state, action ) =>{
      state = action.payload
      return state;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSearchedhero } = searchSlice.actions

export default searchSlice.reducer