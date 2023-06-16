import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemonsAsync = createAsyncThunk(
  "/pokemon/fetchPokemonsAsync",
  async (currentPage) => {
    const currentOffset = currentPage * 30;
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${currentOffset}&limit=30`
    );
    return res.data;
  }
);

export const fetchCurrentPokemonAsync = createAsyncThunk(
  "/pokemon/fetchCurrentPokemonAsync",
  async ({ id }) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res.data;
  }
);

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [],
    isLoading: false,
    error: null,
    page: 0,
    currentPokemon: [],
    currentLoading: false,
  },
  extraReducers: {
    //all pokemons
    [fetchPokemonsAsync.pending]: (state, action) => {
      state.isLoading = true;
      state.page = state.page + 1;
    },
    [fetchPokemonsAsync.fulfilled]: (state, action) => {
      state.pokemons = [...state.pokemons, ...action.payload.results];
      state.isLoading = false;
      console.log(state.pokemons);
    },
    [fetchPokemonsAsync.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    //current pokemon
    [fetchCurrentPokemonAsync.pending]: (state, action) => {
      state.currentLoading = true;
    },
    [fetchCurrentPokemonAsync.fulfilled]: (state, action) => {
      state.currentPokemon = action.payload;
      state.currentLoading = false;
    },
    [fetchCurrentPokemonAsync.rejected]: (state, action) => {
      state.error = action.error.message;
      state.currentLoading = false;
    },
  },
});

export const currentPokemon = (state) => state.pokemon.currentPokemon;
export const Pokemons = (state) => state.pokemon.pokemons;
export default PokemonSlice.reducer;
