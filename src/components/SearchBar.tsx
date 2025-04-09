'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Pokemon } from '../types/pokemon';

interface SearchBarProps {
  pokemons: Pokemon[];
}

export default function SearchBar({ pokemons }: SearchBarProps) {
  const router = useRouter();
  const pathname = usePathname(); // ✅ current path (e.g., /explorer)
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter pokemons based on search query
  useEffect(() => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPokemons(filtered);
    setShowSuggestions(query.length > 0);
  }, [query, pokemons]);

  const handleSearch = (searchQuery: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery) {
      params.set('q', searchQuery);
    } else {
      params.delete('q');
    }
    router.push(`${pathname}?${params.toString()}`); // ✅ dynamically use current route
    setShowSuggestions(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  const handleSuggestionClick = (pokemonName: string) => {
    setQuery(pokemonName);
    handleSearch(pokemonName);
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative" ref={searchContainerRef}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Pokemon by name..."
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </form>

      {/* Autocomplete suggestions */}
      {showSuggestions && filteredPokemons.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
          {filteredPokemons.map((pokemon) => (
            <button
              key={pokemon.id}
              onClick={() => handleSuggestionClick(pokemon.name)}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 transition-colors"
            >
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-10 h-10"
              />
              <div>
                <span className="font-medium capitalize">{pokemon.name}</span>
                <span className="text-sm text-gray-500 ml-2">
                  #{pokemon.id.toString().padStart(3, '0')}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
