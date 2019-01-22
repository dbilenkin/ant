
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
let rules;

const initGrid = () => {
  for (let i = 0; i < height; i++) {
    grid[i] = [];
    for (let j = 0; j < height; j++) {
      grid[i][j] = "white";
    }
  }
};

const go = () => {
  if (steps > 10000000) return;
  if (!grid[c.x] || !grid[c.x][c.y]) return;
  steps++;
  document.getElementById("steps").innerHTML = steps;
  // console.log(steps);
  const currentCell = grid[c.x][c.y];
  const color = rules[currentCell].color;
  grid[c.x][c.y] = color;
  const dir = rules[currentCell].dir;
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

const drawGrid = () => {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  for (let i = 0; i < height; i += size) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
  }

  for (let j = 0; j < width; j += size) {
    ctx.moveTo(0, j);
    ctx.lineTo(width, j);
  }
  ctx.closePath();
  ctx.fillStyle = "rgb(0,0,0,1)";
  ctx.stroke();
};

// drawGrid();
const start = (_rules, _canvas) => {
  ctx = _canvas.getContext("2d");
  rules = _rules;
  initGrid();
  go();
}

export default start;