import { useState } from 'react';

import { Point } from '@/types';

export function usePositions() {
  const [player, setPlayer] = useState<Point>({ x: 0, y: 0 });
  const [start, setStart] = useState<Point>({ x: 0, y: 0 });
  const [end, setEnd] = useState<Point>({ x: 0, y: 0 });

  return {
    player,
    setPlayer,
    start,
    setStart,
    end,
    setEnd,
  };
}
