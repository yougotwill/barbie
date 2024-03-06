'use client';
import { usePositionsContext } from '@/contexts/positions';
import { Point } from '@/types';
import { cn, isEqualPoint } from '@/utils';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type BlockProps = {
  pos: Point;
  value: number;
};

export default function Block(props: BlockProps) {
  const { pos, value } = props;

  const { player, setPlayer, start, setStart, end, setEnd } =
    usePositionsContext();

  // const posText = `${pos.x},${pos.y}`;
  const blockText = value === 1 ? '⛰️' : '';

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
        setIcon(blockText);
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
      className={cn(
        'text-xxs m-1 flex h-2 w-2 items-center justify-center  p-2',
        isPlayer ? 'bg-white' : 'bg-pink-700',
        isStart ? 'bg-pink-500' : 'bg-pink-700',
        isEnd ? 'bg-pink-500' : 'bg-pink-700',
        value === 0 ? 'text-xxs' : 'text-xs',
      )}
      initial={{ opacity: 0.25 }}
      animate={{ opacity: 1.0 }}
    >
      {icon}
    </motion.div>
  );
}
