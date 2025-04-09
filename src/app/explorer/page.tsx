'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getAllPokemons } from '../../utils/pokemonApi';
import PokemonCard from '../../components/PokemonCard';
import SearchBar from '../../components/SearchBar';
import { Pokemon } from '../../types/pokemon';

export default function ExplorerPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const all = await getAllPokemons();
      setPokemons(all);
      setFilteredPokemons(
        searchQuery
          ? all.filter((pokemon) =>
              pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : all
      );
    };
    fetchData();
  }, [searchQuery]);

  return (
    <main className="bg-[#d3db91] min-h-screen text-gray-800 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">
        Pokémon Explorer
        <span className="block text-lg font-normal text-gray-600 mt-2">
          Discover and learn about your favorite Pokémon!
        </span>
      </h1>

      <div className="mb-8">
        <SearchBar pokemons={pokemons} />
      </div>

      {filteredPokemons.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Pokémon Found</h2>
          <p className="text-gray-500">Try searching with a different name or check the spelling.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPokemons.map((pokemon: Pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </main>
  );
}
