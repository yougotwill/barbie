type State = {
  numberOfColumns: number;
  numberOfRows: number;
  startingCoordinateX: number;
  startingCoordinateY: number;
  maze: Array<Array<number>>;
};

const visitedPoints: Array<Point> = [];

type Point = {
  x: number;
  y: number;
  dest?: string;
};

function locationIsAccessible(dest: Point, state: State) {
  console.info(`maze y ${JSON.stringify(state.maze[dest.y])}`);

  console.info(`x:y ${dest.x}:${dest.y}: ${state.maze[dest.y][dest.x]}`);
  const itis = state.maze[dest.y][dest.x] === 0;
  //   console.info(`locationIsAccessible ${JSON.stringify(dest)}: ${itis}}`);

  return itis;
}

function pointExists(dest: Point, state: State) {
  return (
    dest.x < state.numberOfColumns &&
    dest.x >= 0 &&
    dest.y >= 0 &&
    dest.y < state.numberOfRows
  );
}

function areWeDone(loc: Point, state: State) {
  if (loc.x === state.startingCoordinateX) {
    console.info(`areWeDone ${JSON.stringify(loc)}: false`);
    return false;
  }
  if (loc.y === state.startingCoordinateY) {
    console.info(`areWeDone ${JSON.stringify(loc)}: false`);

    return false;
  }
  if (locationIsAccessible(loc, state)) {
    if (loc.x === state.numberOfRows - 1) {
      console.info(`areWeDone ${JSON.stringify(loc)}: true`);

      return true;
    }
    if (loc.y === state.numberOfColumns - 1) {
      console.info(`areWeDone ${JSON.stringify(loc)}: true`);
      return true;
    }

    if (loc.x === 0) {
      console.info(`areWeDone ${JSON.stringify(loc)}: true`);
      return true;
    }
    if (loc.y === 0) {
      console.info(`areWeDone ${JSON.stringify(loc)}: true`);
      return true;
    }
  }
  console.info(`areWeDone ${JSON.stringify(loc)}: false`);
  return false;
}

function allValidNeighbours(
  state: State,
  currentLocation: Point,
  currentPath: Array<Point>,
): Array<Point> {
  const up: Point = {
    x: currentLocation.x,
    y: currentLocation.y - 1,
    dest: 'up',
  };
  const down: Point = {
    x: currentLocation.x,
    y: currentLocation.y + 1,
    dest: 'bottom',
  };
  const left: Point = {
    x: currentLocation.x - 1,
    y: currentLocation.y,
    dest: 'left',
  };

  const right: Point = {
    x: currentLocation.x + 1,
    y: currentLocation.y,
    dest: 'right',
  };

  console.info('                     right before filter');
  return [up, down, left, right]
    .filter((m) => pointExists(m, state))
    .filter(
      (m) =>
        !visitedPoints.some((visited) => {
          return visited.x === m.x && visited.y === m.y;
        }),
    )
    .filter((m) => locationIsAccessible(m, state));
}

export function resolveMaze(state: State, currentPath: Array<Point>) {
  console.info(
    '#####  currentPath',
    currentPath,
    '  ### visitedPoints',
    visitedPoints,
  );

  const currentLocation = currentPath[currentPath.length - 1];
  visitedPoints.push(currentLocation);

  if (areWeDone(currentLocation, state)) {
    console.info('we are done', [...currentPath, currentLocation]);
    return [...currentPath, currentLocation];
  }

  const neighbours = allValidNeighbours(state, currentLocation, currentPath);
  console.info('neighbours', neighbours);
  if (!neighbours.length) {
    return resolveMaze(state, currentPath.slice(0, currentPath.length - 1));

    throw new Error(`No neighours found at ${JSON.stringify(currentLocation)}`);
  }
  console.info('moving ', neighbours[0].dest);
  const newPath = [...currentPath, neighbours[0]];

  return resolveMaze(state, newPath);
}
