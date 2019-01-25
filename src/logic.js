
let ctx;
const width = 500;
const height = 500;
let steps = 0;
const grid = [];
const size = 1;
let c = {
  x: width / size / 2,
  y: height / size / 2,
  d: "up"
};

let state;


const initGrid = () => {
  for (let i = 0; i < height; i++) {
    grid[i] = [];
    for (let j = 0; j < height; j++) {
      grid[i][j] = "white";
    }
  }
};

const go = () => {
  if (!state.running) return;
  if (steps > 10000000) return;
  if (!grid[c.x] || !grid[c.x][c.y]) return;
  steps++;
  document.getElementById("steps").innerHTML = steps;
  // console.log(steps);
  const currentCell = grid[c.x][c.y];
  const color = state.rules[currentCell].color;
  grid[c.x][c.y] = color;
  const dir = state.rules[currentCell].dir;
  ctx.fillStyle = color;
  ctx.fillRect(c.x*size, c.y*size, size, size);
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
  if (steps % 1000 === 0) {
    setTimeout(go, 1);
  } else {
    go();
  }
  
};


const toggle = () => {
  state.running = !state.running;
  if (state.running) { 
    go();
  } 
}

const reset = (canvas) => {
  state.running = false;
  steps = 0;
  initGrid();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  c = {
    x: width / size / 2,
    y: height / size / 2,
    d: "up"
  };
}

// drawGrid();
const start = (_state, _canvas) => {
  ctx = _canvas.getContext("2d");
  state = _state;
  initGrid();
  go();
}

export { start, toggle, reset };