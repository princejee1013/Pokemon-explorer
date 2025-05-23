'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="bg-[#d3db91] min-h-screen text-gray-800">
      <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-10 bg-[#d3db91]">
        {/* LOGO - Always comes first */}
        <div className="w-full md:hidden order-1 flex justify-center mb-4">
          <Image src="/pokemon-logo.png" alt="Pokemon Logo" width={300} height={60} />
        </div>

        {/* CHARIZARD IMAGE - Second on small, right on large */}
        <div className="relative mt-6 md:mt-0 order-2 md:order-2">
          <Image
            src="/charizard.png"
            alt="Charizard"
            width={860}
            height={708}
            className="drop-shadow-2xl"
            priority
          />
        </div>

        {/* TEXT + CTA + Logo (for desktop) */}
        <div className="max-w-xl z-100 order-3 md:order-1 text-center md:text-left mt-8 md:mt-0">
          {/* Desktop logo */}
          <div className="hidden md:block mb-4">
            <Image src="/pokemon-logo.png" alt="Pokemon Logo" width={500} height={60} />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Gotta Catch 'Em All!</h1>
          <p className="mt-2 text-lg text-gray-700 leading-relaxed">
            Pokémon is a Japanese franchise managed by the Pokémon Company, founded by Nintendo.
          </p>
          <Link href="/explorer">
            <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl text-lg hover:bg-gray-800 transition">
              More Information
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
