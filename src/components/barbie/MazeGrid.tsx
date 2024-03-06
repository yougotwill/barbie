'use client';
import { usePositionsContext } from '@/contexts/positions';
import { cn } from '@/utils';
import { useMount } from 'react-use';
import Block from './Block';
import { Maze } from '@/types';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export function MazeGrid(props: Maze) {
  const { startingCoordinateX, startingCoordinateY, maze } = props;

  const { setPlayer, setStart, setEnd } = usePositionsContext();

  useMount(() => {
    setPlayer({ x: startingCoordinateX, y: startingCoordinateY });
    setStart({ x: startingCoordinateX, y: startingCoordinateY });
  });

  return (
    <div className={cn('flex flex-col items-center justify-center')}>
      <div
        className={cn('h-100 w-100 mx-auto flex items-center justify-center')}
      >
        {maze.map((row, x) => {
          return (
            <div key={`row-${x}`}>
              {row.map((cell, y) => {
                return <Block key={`${x},${y}`} pos={{ x, y }} value={cell} />;
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
    </div>
  );
}
