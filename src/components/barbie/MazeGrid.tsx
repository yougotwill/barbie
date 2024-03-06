'use client';
import { usePositionsContext } from '@/contexts/positions';
import { resolveMaze } from '@/scripts/resolveMaze';
import { Maze, Point } from '@/types';
import { cn } from '@/utils';
import { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useInterval, useMount } from 'react-use';
import Block from './Block';

export function MazeGrid({ maze }: { maze: Maze }) {
  const [sol, setSol] = useState<Array<Point> | undefined>(undefined);

  useEffect(() => {
    try {
      const sol = resolveMaze(maze, [
        { x: maze.startingCoordinateX, y: maze.startingCoordinateY },
      ]);
      setSol(sol);
    } catch (error) {
      console.error(error);
    }
  }, [maze]);

  return sol ? <Maze maze={maze} sol={sol} /> : null;
}

function Maze({ maze, sol }: { maze: Maze; sol: Array<Point> }) {
  const [pos, setPos] = useState<number>(0);

  const { setPlayer, setStart, setEnd } = usePositionsContext();

  useInterval(
    () => {
      setPlayer(sol[pos]);
      setPos(pos + 1);
    },
    pos < sol.length ? 75 : null,
  );

  useMount(() => {
    setPlayer({ x: maze.startingCoordinateX, y: maze.startingCoordinateY });
    setStart({ x: maze.startingCoordinateX, y: maze.startingCoordinateY });
    setEnd(sol[sol.length - 1]);
  });

  return (
    <>
      <div
        className={cn(
          'absolute flex h-screen w-screen items-center justify-center',
        )}
      >
        {maze.maze.map((row, x) => {
          return (
            <div key={`row-${x}`} className="bg-white">
              {row.map((cell, y) => {
                return (
                  <Block
                    key={`${x},${y}`}
                    pos={{ y: x, x: y }}
                    value={cell}
                    title={`x: ${x}, y: ${y} - ${cell === 1 ? 'wall' : 'path'}`}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div className={cn('absolute bottom-0 left-0')}>
        <AudioPlayer
          showJumpControls={false}
          showFilledProgress={false}
          src="./assets/barbie.mp3"
        />
      </div>
    </>
  );
}
