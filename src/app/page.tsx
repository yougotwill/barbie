import { MazeGrid } from '@/components/barbie/MazeGrid';
import { Maze } from '@/types';
import { cn } from '@/utils';
import { resolveMaze } from '../scripts/resolveMaze';

export default async function Home() {
  return (
    <div
      className={cn(
        'mx-auto flex h-screen w-full flex-col items-center justify-center  bg-pink-400',
        'overflow-hidden',
      )}
    >
      <MazeGrid />
    </div>
  );
}
