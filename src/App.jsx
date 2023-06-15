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
  useEffect(() => {
    dispatch(fetchPokemonsAsync());
  }, [dispatch]);

  return (
    <div className="w-full h-screen flex  items-center justify-start bg-gradient-to-br from-yellow-100 to-amber-200">
      <nav className="w-3/5 h-screen flex items-center justify-start space-y-6 flex-col  ">
        <h1 className="font-bold text-6xl font-piksel mb-24">
          Select A Pokemon
        </h1>
        {allPokemons == "" ? (
          <h1 className="font-bold text-6xl font-piksel"> Loading ...</h1>
        ) : (
          <div className="w-full h-auto  overflow-x-hidden grid grid-cols-3 gap-4 px-4">
            {allPokemons.results.map((item, key) => (
              <Link to={`/pokemon/${key + 1}`}>
                <div
                  key={key}
                  className="font-piksel flex items-center justify-evenly space-x-4 w-80 h-20 rounded-2xl bg-sky-400 border border-black group hover:bg-sky-300 ease-in-out duration-500"
                  onClick={() => {
                    dispatch(fetchCurrentPokemonAsync({ id: key + 1 }));
                  }}
                >
                  <p className="font-medium text-sm px-2 py-2">{key + 1}</p>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      key + 1
                    }.png`}
                    alt=""
                    className="group-hover:scale-105 ease-in-out duration-500"
                  />
                  <p className="font-medium text-base group-hover:-translate-x-2 ease-in-out duration-500">
                    {item.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </nav>
      <div className="w-2/5 h-screen bg-gradient-to-b from-yellow-500 to-amber-400 shadow-xl overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:pokeid" element={<PokemonPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
