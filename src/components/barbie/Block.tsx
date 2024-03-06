'use client';
import { usePositionsContext } from '@/contexts/positions';
import { Point } from '@/types';
import { cn, isEqualPoint } from '@/utils';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type BlockProps = {
  pos: Point;
  value: number;
  title: string;
};

export default function Block(props: BlockProps) {
  const { pos, value, title } = props;

  const { player, setPlayer, start, setStart, end, setEnd } =
    usePositionsContext();

  // const posText = `${pos.x},${pos.y}`;
  const blockText = value === 1 ? '⛰️' : '';

  const [isVisited, setIsVisited] = useState(false);
  const [isPlayer, setIsPlayer] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [icon, setIcon] = useState(blockText);

  useEffect(() => {
    if (isEqualPoint(pos, start)) {
      setIsStart(true);
      setIcon('🏠');
    } else {
      if (isStart) {
        setIsStart(false);
        setIcon(blockText);
      }
    }

    if (isEqualPoint(pos, player)) {
      setIsPlayer(true);
      setIcon('💃');
    } else {
      if (isPlayer) {
        setIsPlayer(false);
        setIsVisited(true);
        setIcon('🔴');
      }
    }

    if (isEqualPoint(pos, end)) {
      setIsEnd(true);
      setIcon('🙋‍♂️');
    } else {
      if (isEnd) {
        setIsEnd(false);
        setIcon(blockText);
      }
    }
  }, [blockText, end, isEnd, isPlayer, isStart, player, pos, start]);

  return (
    <motion.div
      title={title}
      className={cn(
        'text-md flex h-2 w-2 items-center justify-center bg-white p-2',
        isPlayer && 'rounded-full bg-pink-300',
        isStart && 'rounded-full bg-pink-500',
        isEnd && 'rounded-full bg-pink-500',
        value === 0 ? 'text-xs' : 'text-sm',
      )}
      initial={{ opacity: 0.25 }}
      animate={{ opacity: 1.0 }}
    >
      {icon}
    </motion.div>
  );
}
