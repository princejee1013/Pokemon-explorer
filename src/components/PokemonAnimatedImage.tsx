'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

export default function PokemonAnimatedImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const controls = useAnimation();

  const triggerMove = () => {
    controls.start({
      scale: [1, 1.2, 0.95, 1],
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.6 },
    });
  };

  useEffect(() => {
    window.addEventListener('perform-move', triggerMove);
    return () => window.removeEventListener('perform-move', triggerMove);
  }, []);

  return (
    <motion.div animate={controls} className="relative w-full h-full">
      <Image src={src} alt={alt} fill className="object-contain drop-shadow-2xl" priority />
    </motion.div>
  );
}
