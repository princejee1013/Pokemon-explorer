'use client';

import { motion } from 'framer-motion';

export default function AnimatedMoveList({
  moves,
}: {
  moves: { move: { name: string } }[];
}) {
  const trigger = () => {
    window.dispatchEvent(new Event('perform-move'));
  };

  return (
    <div className="flex flex-wrap gap-3">
      {moves.slice(0, 20).map(({ move }) => (
        <motion.span
          key={move.name}
          onClick={trigger}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.2, rotate: -5 }}
          className="cursor-pointer bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium capitalize text-gray-700 border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all duration-200"
        >
          {move.name}
        </motion.span>
      ))}
    </div>
  );
}
