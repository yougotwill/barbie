'use client';
import { usePositionsContext } from '@/contexts/positions';
import { cn } from '@/utils';
import { useInterval, useMount } from 'react-use';
import Block from './Block';
import { Maze } from '@/types';
import { resolveMaze } from '@/scripts/resolveMaze';
import { useState } from 'react';

const myMaze: Maze = {
  numberOfColumns: 20,
  numberOfRows: 20,
  startingCoordinateX: 14,
  startingCoordinateY: 19,
  maze: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  ],
};

const sol = resolveMaze(myMaze, [
  { x: myMaze.startingCoordinateX, y: myMaze.startingCoordinateY },
]);

export function MazeGrid() {
  const [pos, setPos] = useState<number>(0);

  const { setPlayer, setStart, setEnd, setSolution, solution } =
    usePositionsContext();

  useInterval(
    () => {
      setPlayer(solution[pos]);
      setPos(pos + 1);
    },
    pos < solution.length ? 1000 : null,
  );

  useMount(() => {
    setPlayer({ x: myMaze.startingCoordinateX, y: myMaze.startingCoordinateY });
    setStart({ x: myMaze.startingCoordinateX, y: myMaze.startingCoordinateY });
    setSolution(sol);
    console.info('SOLVED');
    console.info(sol);
    setEnd(sol[sol.length - 1]);
  });

  return (
    <div className={cn('h-100 w-100 mx-auto flex items-center justify-center')}>
      {myMaze.maze.map((row, x) => {
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
