'use client';
import { usePositionsContext } from '@/contexts/positions';
import { Point } from '@/types';
import { cn, isEqualPoint } from '@/utils';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

type BlockProps = {
  pos: Point;
  value: number;
  title: string;
};

const WallTile = () => {
  return (
    <div className="absolute">
      <div className="relative  flex">
        <div className="-mr-4">⛰️</div>
        <div className="mt-2">🏔️</div>
      </div>
    </div>
  );
};

const HomeTile = () => {
  return <div className="absolute">🏠</div>;
};

const PlayerTile = () => {
  return <div className="absolute">💃</div>;
};

const EndTile = () => {
  return <div className="absolute">🙋‍♂️</div>;
};

const PathTile = () => {
  return <div className="absolute">🔴</div>;
};

export default function Block(props: BlockProps) {
  const { pos, value, title } = props;

  const { player, setPlayer, start, setStart, end, setEnd } =
    usePositionsContext();

  // const posText = `${pos.x},${pos.y}`;
  const blockCell = useMemo(() => {
    if (value === 1) {
      return WallTile;
    } else {
      return <></>;
    }
  }, [value]);

  const [isVisited, setIsVisited] = useState(false);
  const [isPlayer, setIsPlayer] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [tile, setTile] = useState(blockCell);
  const isWall = value === 1;

  useEffect(() => {
    if (isEqualPoint(pos, start)) {
      setIsStart(true);
      setTile(HomeTile);
    } else {
      if (isStart) {
        setIsStart(false);
        setTile(blockCell);
      }
    }

    if (isEqualPoint(pos, player)) {
      setIsPlayer(true);
      setTile(PlayerTile);
    } else {
      if (isPlayer) {
        setIsPlayer(false);
        setIsVisited(true);
        setTile(PathTile);
      }
    }

    if (isEqualPoint(pos, end)) {
      setIsEnd(true);
      setTile(EndTile);
    } else {
      if (isEnd) {
        setIsEnd(false);
        setTile(blockCell);
      }
    }
  }, [blockCell, end, isEnd, isPlayer, isStart, player, pos, start]);

  return (
    <motion.div
      title={title}
      className={cn(
        'text-xl relative flex aspect-square h-full w-full items-center justify-center bg-white p-4',
        isPlayer && 'rounded-full bg-pink-300',
        isStart && 'rounded-full bg-pink-500',
        isEnd && 'rounded-full bg-pink-500',
      )}
      initial={{ opacity: 0.25 }}
      animate={{ opacity: 1.0 }}
    >
      {tile}
    </motion.div>
  );
}
