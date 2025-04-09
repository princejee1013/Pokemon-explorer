import { Pokemon, PokemonDetail } from '../types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

export async function getAllPokemons(limit: number = 151): Promise<Pokemon[]> {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
  const data = await response.json();
  
  return Promise.all(
    data.results.map(async (pokemon: { url: string }) => {
      const res = await fetch(pokemon.url);
      return res.json();
    })
  );
}

export async function getPokemonById(id: string): Promise<PokemonDetail> {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
  return response.json();
}

export async function searchPokemons(query: string, pokemons: Pokemon[]): Promise<Pokemon[]> {
  return pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(query.toLowerCase())
  );
} 