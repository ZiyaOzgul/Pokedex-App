import { Link, Route, Routes, json } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Pokemons,
  fetchCurrentPokemonAsync,
  fetchPokemonsAsync,
} from "./redux/PokemonSlicer/PokemonSlicer";
import PokemonPage from "./pages/PokemonPage";

function App() {
  const dispatch = useDispatch();
  const allPokemons = useSelector(Pokemons);
  const currentPage = useSelector((state) => state.pokemon.page);

  useEffect(() => {
    dispatch(fetchPokemonsAsync(currentPage));
  }, [dispatch]);
  const page = currentPage - 1;
  return (
    <div className="w-full h-screen flex flex-col-reverse lg:flex-row items-center justify-start bg-gradient-to-br from-yellow-100 to-amber-200">
      <nav className="w-full h-2/5 lg:w-3/5 lg:h-screen flex items-center justify-start space-y-6 flex-col  ">
        <h1 className="font-medium text-lg lg:font-bold lg:text-6xl font-piksel my-6 mb-0 lg:my-0 lg:mb-24">
          Select A Pokemon
        </h1>
        {allPokemons == "" ? (
          <h1 className="font-bold text-6xl font-piksel"> Loading ...</h1>
        ) : (
          <div className="w-full h-auto  overflow-x-hidden grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 px-2 lg:px-4">
            {allPokemons.map((item, key) => (
              <Link to={`/pokemon/${key}`} key={key}>
                <div
                  className="font-piksel flex items-center justify-start lg:justify-evenly space-x-1 lg:space-x-4 w-48 h-10 lg:w-80 lg:h-20 rounded-lg lg:rounded-2xl bg-sky-400 border border-black group hover:bg-sky-300 ease-in-out duration-500"
                  onClick={() => {
                    dispatch(
                      fetchCurrentPokemonAsync({
                        id: key + 1,
                      })
                    );
                  }}
                >
                  <p className="font-normal text-xs lg:font-medium lg:text-sm px-1 py-1 lg:px-2 lg:py-2">
                    {key + 1}
                  </p>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      key + 1
                    }.png`}
                    alt=""
                    className="h-10 w-10 lg:w-auto lg:h-auto group-hover:scale-105 ease-in-out duration-500"
                  />
                  <p className="font-light text-sm lg:font-medium  lg:text-base group-hover:-translate-x-1 lg:group-hover:-translate-x-2 transition-all ease-in-out duration-500">
                    {item.name}
                  </p>
                </div>
              </Link>
            ))}
            <div className="flex items-center justify-center w-full">
              <p
                className="font-piksel  cursor-pointer hover:outline hover:scale-105 transition-all duration-500 ease-in-out "
                onClick={() => dispatch(fetchPokemonsAsync(currentPage))}
              >
                Load More ...
              </p>
            </div>
          </div>
        )}
      </nav>
      <div className="w-full h-3/5 lg:w-2/5 lg:h-screen bg-gradient-to-b from-yellow-500 to-amber-400 shadow-xl overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:pokeid" element={<PokemonPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
