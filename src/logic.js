
let ctx;
let canvas;
const width = 500;
const height = 500;
let steps = 0;
const grid = [];
let state;
let c = {};
let stepConst;
let speedConst;
let rescale = false;

const initGrid = () => {
  c = {
    x: Math.floor(width / 2),
    y: Math.floor(height / 2),
    d: "up"
  };
  for (let i = 0; i < height; i++) {
    grid[i] = [];
    for (let j = 0; j < height; j++) {
      grid[i][j] = "#ffffff";
    }
  }
};

const findIndexByColor = color => {
  return state.rules.findIndex(rule => rule.color === color);
}

const redrawGrid = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height; j++) {
      const color = grid[i][j];
      if (color !== "#ffffff") {
        ctx.fillStyle = color; 
        const x = i * state.size - (width * state.size - width)/2;
        const y = j * state.size - (width * state.size - width)/2;
        ctx.fillRect(x, y, state.size, state.size);
      }
    }
  }

}

const go = () => {
  if (rescale) {
    redrawGrid();
    rescale = false;
  }
  if (!state.running) return;
  if (steps > 10000000) return;
  if (!grid[c.x] || !grid[c.x][c.y]) return;
  steps++;
  document.getElementById("steps").innerHTML = steps;
  // console.log(steps);
  const currentCellColor = grid[c.x][c.y];
  const currentIndex = findIndexByColor(currentCellColor);
  const nextIndex = (currentIndex+1)%state.rules.length
  const newColor = state.rules[nextIndex].color;
  grid[c.x][c.y] = newColor;
  const dir = state.rules[currentIndex].dir;
  ctx.fillStyle = newColor;
  const x = c.x * state.size - (width * state.size - width)/2;
  const y = c.y * state.size - (width * state.size - width)/2;
  ctx.fillRect(x, y, state.size, state.size);
  if (c.d === "up") {
    if (dir === "left") {
      c.x--;
      c.d = "left";
    } else {
      c.x++;
      c.d = "right";
    }
  } else if (c.d === "down") {
    if (dir === "left") {
      c.x++;
      c.d = "right";
    } else {
      c.x--;
      c.d = "left";
    }
  } else if (c.d === "left") {
    if (dir === "left") {
      c.y++;
      c.d = "down";
    } else {
      c.y--;
      c.d = "up";
    }
  } else {
    if (dir === "left") {
      c.y--;
      c.d = "up";
    } else {
      c.y++;
      c.d = "down";
    }
  }

  
  if (steps % stepConst === 0) {
    setTimeout(go, speedConst);
  } else {
    go();
  }
  
};

const updateSpeedConsts = () => {
  if (state.speed > 6) {
    stepConst = Math.pow(10, state.speed - 7);
  } else {
    stepConst = 1;
    speedConst = Math.pow(5, 6 - state.speed);
  }
  
}

const reset = () => {
  // state.running = false;
  steps = 0;
  initGrid();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  c = {
    x: Math.floor(width / 2),
    y: Math.floor(height / 2),
    d: "up"
  };
}

const updateState = (_state) => {
  if (state.size !== _state.size) rescale = true;
  state = _state;
  updateSpeedConsts();
  if (state.running) go();
}

// drawGrid();
const start = (_state, _canvas) => {
  ctx = _canvas.getContext("2d");
  state = _state;
  canvas = _canvas;
  initGrid();
  go();
}

export { start, reset, updateState };