import PokemonAnimatedImage from '../../../components/PokemonAnimatedImage';
import AnimatedMoveList from '../../../components/AnimatedMoveList';

import { getPokemonById } from '../../../utils/pokemonApi';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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

const STAT_COLORS = {
  hp: 'bg-green-500',
  attack: 'bg-red-500',
  defense: 'bg-blue-500',
  'special-attack': 'bg-purple-500',
  'special-defense': 'bg-indigo-500',
  speed: 'bg-yellow-500',
};

export default async function PokemonDetail({
  params,
}: {
  params: { id: string };
}) {
  try {
    const pokemon = await getPokemonById(params.id);

    return (
      <main className="container mx-auto px-4 py-8 min-h-screen bg-gray-50">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-200 text-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-7xl mx-auto backdrop-blur-sm bg-opacity-95">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative h-[400px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 transform transition-transform duration-300 hover:scale-105">
              {/* <Image
                src={
                  pokemon.sprites.other['official-artwork'].front_default ||
                  pokemon.sprites.front_default
                }
                alt={pokemon.name}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              /> */}
              <PokemonAnimatedImage
  src={
    pokemon.sprites.other['official-artwork'].front_default ||
    pokemon.sprites.front_default
  }
  alt={pokemon.name}
/>

            </div>

            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-bold capitalize mb-2 text-black">
                  {pokemon.name}
                </h1>
                <p className="text-2xl text-gray-500 font-medium">
                  #{pokemon.id.toString().padStart(3, '0')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-semibold mb-3 text-gray-700">Types</h2>
                  <div className="flex gap-3">
                    {pokemon.types.map(({ type }) => (
                      <span
                        key={type.name}
                        className={`${TYPE_COLORS[type.name as keyof typeof TYPE_COLORS]} px-4 py-2 rounded-full text-white text-sm font-medium capitalize shadow-lg transform transition-transform duration-200 hover:scale-105`}
                      >
                        {type.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3 text-gray-700">Measurements</h2>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">
                      <span className="font-medium mr-2">Height:</span>
                      <span className="bg-blue-50 px-3 py-1 rounded-lg">{pokemon.height / 10}m</span>
                    </p>
                    <p className="flex items-center">
                      <span className="font-medium mr-2">Weight:</span>
                      <span className="bg-blue-50 px-3 py-1 rounded-lg">{pokemon.weight / 10}kg</span>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-700">Abilities</h2>
                <div className="flex flex-wrap gap-3">
                  {pokemon.abilities.map(({ ability, is_hidden }) => (
                    <span
                      key={ability.name}
                      className={`px-4 py-2 rounded-lg text-sm font-medium capitalize shadow-md transition-all duration-200 hover:shadow-lg ${
                        is_hidden
                          ? 'bg-purple-100 text-purple-700 border border-purple-200'
                          : 'bg-blue-100 text-blue-700 border border-blue-200'
                      }`}
                    >
                      {ability.name}
                      {is_hidden && ' ✨'}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Base Stats</h2>
                <div className="space-y-4">
                  {pokemon.stats.map(({ stat, base_stat }) => (
                    <div key={stat.name} className="flex items-center">
                      <span className="w-32 text-sm font-medium capitalize text-gray-600">{stat.name}:</span>
                      <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${STAT_COLORS[stat.name as keyof typeof STAT_COLORS]} transition-all duration-500 ease-out`}
                          style={{ width: `${(base_stat / 255) * 100}%` }}
                        />
                      </div>
                      <span className="w-12 text-right text-sm font-bold ml-3 text-gray-700">{base_stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">Moves</h2>
            <div className="flex flex-wrap gap-3">
              {pokemon.moves.slice(0, 20).map(({ move }) => (
                <span
                  key={move.name}
                  className="bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium capitalize text-gray-700 border border-gray-200 transition-all duration-200 hover:bg-gray-100 hover:shadow-md"
                >
                  {move.name}
                </span>
              ))}
            </div>
          </div> */}
                <div className="mt-12 border-t pt-8">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-700">Moves</h2>
                    <AnimatedMoveList moves={pokemon.moves} />
                </div>

        </div>
      </main>
    );
  } catch (error) {
    notFound();
  }
} 