import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { currentPokemon } from "../redux/PokemonSlicer/PokemonSlicer";

const Pokemon = () => {
  const pokemon = useSelector(currentPokemon);
  const isLoading = useSelector((state) => state.pokemon.currentLoading);
  const { pokeid } = useParams();
  if (isLoading) {
    <div className="flex items-center justify-center">
      <h1 className="font-semibold text-4xl font-pokemon text-red-500">
        PoKeMoN
      </h1>
      <h1 className="font-semibold text-4xl font-piksel">Loading ...</h1>
    </div>;
  }
  return (
    <div className="flex flex-col items-start justify-normal spcae-y-4">
      <img
        src={`${pokemon.sprites.front_default}`}
        alt={`${pokemon.forms.name}`}
      />
      <h1 className="font-semibold text-xl font-piksel">
        {pokemon.forms.name}
      </h1>
    </div>
  );
};

export default Pokemon;
