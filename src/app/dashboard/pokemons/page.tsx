import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { Metadata } from 'next';

const getPokemons = async (limit = 151, offset=0) : Promise<SimplePokemon[]> =>{
   const data: PokemonsResponse = await fetch( `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}` )
    .then( res => res.json() );

    const pokemons = data.results.map( pokemon => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name,
    }));
    
    return pokemons;
}

export const metadata = {
  title: '151 Pokemons',
  description: ' 151 pokemos data'
}

export default async function PokemosPage() {

  const pokemons = await getPokemons();

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Listado de pokemons <small>Dinámico</small></span>

      <PokemonGrid pokemons= { pokemons } />

    </div>
  );
}