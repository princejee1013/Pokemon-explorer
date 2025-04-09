'use client';
import PokemonAnimatedImage from '../components/AnimatedMoveList';
import { Pokemon } from '../types/pokemon';
import Link from 'next/link';
import Image from 'next/image';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const TYPE_COLORS = {
  normal: 'bg-gray-400',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  grass: 'bg-green-500',
  electric: 'bg-yellow-400',
  ice: 'bg-blue-200',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-600',
  flying: 'bg-indigo-400',
  psychic: 'bg-pink-500',
  bug: 'bg-lime-500',
  rock: 'bg-yellow-800',
  ghost: 'bg-purple-700',
  dark: 'bg-gray-800',
  dragon: 'bg-indigo-700',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-300',
};

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <div className="relative w-full h-48">
          <Image
            src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
            alt={pokemon.name}
            fill
            className="object-contain"
            priority
          />
         

          

        </div>
        <div className="mt-4">
          <h2 className="text-xl text-black font-bold capitalize mb-2">
            #{pokemon.id.toString().padStart(3, '0')} {pokemon.name}
          </h2>
          <div className="flex gap-2">
            {pokemon.types.map(({ type }) => (
              <span
                key={type.name}
                className={`${TYPE_COLORS[type.name as keyof typeof TYPE_COLORS]} px-3 py-1 rounded-full text-white text-sm capitalize`}
              >
                {type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
} 