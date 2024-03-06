'use client';
import { usePositionsContext } from '@/contexts/positions';
import { cn } from '@/utils';
import { useInterval, useMount } from 'react-use';
import Block from './Block';
import { Maze } from '@/types';
import { resolveMaze } from '@/scripts/resolveMaze';
import { useState } from 'react';

export function MazeGrid(props: Maze) {
  const [pos, setPos] = useState<number>(0);
  const { startingCoordinateX, startingCoordinateY, maze } = props;

  const { setPlayer, setStart, setEnd, setSolution, solution } =
    usePositionsContext();

  useInterval(() => {
    setPlayer(solution[pos]);
    setPos(pos + 1);
  }, 1000);

  useMount(() => {
    setPlayer({ x: startingCoordinateX, y: startingCoordinateY });
    setStart({ x: startingCoordinateX, y: startingCoordinateY });
    const sol = resolveMaze(props, [
      { x: startingCoordinateX, y: startingCoordinateY },
    ]);
    setSolution(sol);
    console.info('SOLVED');
    console.info(sol);
    setEnd(sol[sol.length - 1]);
  });

  return (
    <div className={cn('h-100 w-100 mx-auto flex items-center justify-center')}>
      {maze.map((row, x) => {
        return (
          <div key={`row-${x}`}>
            {row.map((cell, y) => {
              return <Block key={`${x},${y}`} pos={{ x, y }} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
