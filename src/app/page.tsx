'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="bg-[#d3db91] min-h-screen text-gray-800">
      <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-10 bg-[#d3db91]">
        <div className="max-w-xl z-100">
          <Image src="/pokemon-logo.png" alt="Pokemon Logo" width={500} height={60} />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-10">Gotta Catch 'Em All!</h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Pokémon is a Japanese franchise managed by the Pokémon Company, founded by Nintendo.
          </p>
          <Link href="/explorer">
            <button className="mt-8 bg-black text-white px-6 py-3 rounded-xl text-lg hover:bg-gray-800 transition">
              More Information
            </button>
          </Link>
        </div>
        <div className="relative mt-12 md:mt-0">
          <Image
            src="/charizard.png"
            alt="Charizard"
            width={860}
            height={708}
            className="drop-shadow-2xl"
            priority
          />
        </div>
      </section>
    </main>
  );
}
