import { Point } from '@/types';
import { isEqual } from 'lodash';
import { cn } from './cn';
import { isLocalLink } from './links';

function isEqualPoint(point1: Point, point2: Point) {
  return isEqual(point1.x, point2.x) && isEqual(point1.y, point2.y);
}

export { cn, isLocalLink, isEqualPoint };
