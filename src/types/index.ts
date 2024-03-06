export type Point = {
  x: number;
  y: number;
};

export type Maze = {
  numberOfColumns: number;
  numberOfRows: number;
  startingCoordinateX: number;
  startingCoordinateY: number;
  maze: Array<Array<number>>;
};
