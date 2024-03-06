'use client';
import { ReactElement, ReactNode, createContext, useContext } from 'react';

import { Point } from '@/types';
import { usePositions } from '@/hooks/positions';

export interface Positions {
  player: Point;
  setPlayer: (...value: Array<any>) => void;
  start: Point;
  setStart: (...value: Array<any>) => void;
  end: Point;
  setEnd: (...value: Array<any>) => void;
  solution: Array<Point>;
  setSolution: (...value: Array<any>) => void;
}

const PositionContext = createContext<Positions>({
  player: { x: 0, y: 0 },
  setPlayer: () => {},
  start: { x: 0, y: 0 },
  setStart: () => {},
  end: { x: 0, y: 0 },
  setEnd: () => {},
  solution: [],
  setSolution: () => {},
});

export function usePositionsContext() {
  return useContext(PositionContext);
}

interface Props {
  children: ReactNode;
}

export function PositionProvider(props: Props): ReactElement {
  const { children } = props;

  const value: Positions = usePositions();

  return (
    <PositionContext.Provider value={value}>
      {children}
    </PositionContext.Provider>
  );
}
