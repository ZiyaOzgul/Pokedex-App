import { configureStore } from "@reduxjs/toolkit";
import pokemonStore from "./PokemonSlicer/PokemonSlicer";

export const store = configureStore({
  reducer: {
    pokemon: pokemonStore,
  },
});
