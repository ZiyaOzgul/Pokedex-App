import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemonsAsync = createAsyncThunk(
  "/pokemon/fetchPokemonsAsync",
  async () => {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=30"
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
    currentPokemon: [],
    currentLoading: false,
  },
  extraReducers: {
    //all pokemons
    [fetchPokemonsAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchPokemonsAsync.fulfilled]: (state, action) => {
      state.pokemons = action.payload;
      console.log(action.payload);
      state.isLoading = false;
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
