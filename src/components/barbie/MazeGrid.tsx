'use client';
import { usePositionsContext } from '@/contexts/positions';
import { cn } from '@/utils';
import { useMount } from 'react-use';
import Block from './Block';
import { Maze } from '@/types';

export function MazeGrid(props: Maze) {
  const { startingCoordinateX, startingCoordinateY, maze } = props;

  const { setPlayer, setStart, setEnd } = usePositionsContext();

  useMount(() => {
    setPlayer({ x: startingCoordinateX, y: startingCoordinateY });
    setStart({ x: startingCoordinateX, y: startingCoordinateY });
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
