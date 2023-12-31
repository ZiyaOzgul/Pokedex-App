import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { currentPokemon } from "../redux/PokemonSlicer/PokemonSlicer";
import {
  UilAngleLeftB,
  UilGithub,
  UilLinkedin,
} from "@iconscout/react-unicons";

const Pokemon = () => {
  const pokemon = useSelector(currentPokemon);
  const isLoading = useSelector((state) => state.pokemon.currentLoading);

  if (isLoading) {
    <div className="flex items-center justify-center">
      <h1 className="font-medium lg:font-semibold text-xl lg:text-4xl font-piksel">
        Loading ...
      </h1>
    </div>;
  } else {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center  space-y-1 lg:spcae-y-4 relative">
        <img
          src={`${pokemon.sprites.other.dream_world.front_default}`}
          alt={`${pokemon.name}`}
          className="h-32 w-28 lg:w-40 lg:h-60"
        />
        <h1 className="font-medium text-base lg:font-semibold lg:text-xl font-piksel">
          Name : {pokemon.forms[0].name}
        </h1>
        <div className="w-full flex items-center justify-center space-x-1 lg:space-x-6 mt-1 lg:mt-6">
          <h1 className="py-2 font-medium lg:font-semibold text-base lg:text-lg font-piksel">
            Types :
          </h1>
          {pokemon.types.map((item, key) => (
            <h1
              key={key}
              className="font-normal lg:font-medium text-lg lg:text-xl font-piksel"
            >
              {item.type.name}
            </h1>
          ))}
        </div>
        <div className="w-full flex items-center justify-center space-x-1 lg:space-x-6 mt-1 lg:mt-6">
          <h1 className="py-2 font-medium lg:font-semibold text-base lg:text-lg font-piksel">
            Abilities :
          </h1>
          {pokemon.abilities.map((item, key) => (
            <h1
              key={key}
              className="font-normal lg:font-medium text-lg lg:text-xl font-piksel"
            >
              {item.ability.name}
            </h1>
          ))}
        </div>
        <div className="w-full flex flex-col items-center justify-center space-y-1 lg:space-y-4 mt-1 lg:mt-6">
          <h1 className="font-normal lg:font-medium text-lg lg:text-xl font-piksel">
            Base Stats :
          </h1>
          <div className="w-full flex items-center justify-center space-x-1 lg:space-x-6 mt-1 lg:mt-6 flex-wrap">
            {pokemon.stats.map((item, key) => (
              <div className="flex items-center justify-start">
                <h1
                  className="font-medium lg:font-semibold text-base lg:text-lg font-piksel"
                  key={key}
                >
                  {item.stat.name} :
                </h1>
                <p className="font-normal lg:font-medium text-lg lg:text-xl font-piksel">
                  {item.base_stat}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Link to={"/"}>
          <h1 className="absolute top-0 left-4 md:left-20 px-1 md:px-4 font-medium md:font-semibold text-xl md:text-4xl font-pokemon text-red-600 hover:scael-110 ease-in-out duration-500">
            PoKeMoN
          </h1>
        </Link>
        <Link to={"/"}>
          <div className="absolute right-2 top-3 flex items-center justify-center group">
            <UilAngleLeftB className="group-hover:-translate-x-4 ease-in-out duration-500"></UilAngleLeftB>
            <h1 className="font-medium lg:font-semibold text-lg lg:text-xl font-piksel">
              Back <i className="hidden lg:inline-block">To Home</i>
            </h1>
          </div>
        </Link>
        <div className="flex items-center justify-evenly space-x-1 lg:space-x-4 absolute bottom-1 right-4">
          <a href="https://github.com/ZiyaOzgul" target="_blank">
            <UilGithub className="w-10 h-10 font-piksel text-gray-600 hover:scale-110 ease-in-out duration-500"></UilGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/ziya-%C3%B6zg%C3%BCl-93816a260"
            target="_blank"
          >
            <UilLinkedin className="w-10 h-10 font-piksel text-blue-600 page"></UilLinkedin>
          </a>
        </div>
      </div>
    );
  }
};

export default Pokemon;
