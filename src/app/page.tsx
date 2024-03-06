'use client';
import { MazeGrid } from '@/components/barbie/MazeGrid';
import { mazes } from '../../public/assets/mazes';

export default function Home() {
  return <MazeGrid maze={mazes[2]} />;
}
