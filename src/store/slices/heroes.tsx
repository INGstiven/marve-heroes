/* eslint-disable no-debugger */
import { createSlice } from '@reduxjs/toolkit'
import { Hero } from '../../types/heroes/hero';
export interface HeroesSelection{
  SelectedHero?: Hero;
  Heroes?: Array<Hero>
}
const ininitalState: HeroesSelection = {};
export const heroesSlice = createSlice({
  name: 'heroes',
  initialState: ininitalState,
  reducers: {
    setHeroes: (state, action ) =>{
      state.Heroes = action.payload
    },
    setSelectedHero: (state, action) => {
      state.SelectedHero = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setHeroes, setSelectedHero } = heroesSlice.actions

export default heroesSlice.reducer