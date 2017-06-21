// Tetris by arturham
// 28 Nov 2016

//-------------------------------------------------------------------------
// game constants
//-------------------------------------------------------------------------

var grid = [[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
            [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8],
            [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
            [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]];

var tetrominoes = {
  T: {
    0: [[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]],
    1: [[0,1,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0]],
    2: [[0,1,0,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]],
    3: [[0,1,0,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]],
    colorCode: 1,
    preview: [14.5, 2]
  },
  S: {
    0: [[0,0,0,0],[0,2,2,0],[2,2,0,0],[0,0,0,0]],
    1: [[2,0,0,0],[2,2,0,0],[0,2,0,0],[0,0,0,0]],
    2: [[0,2,2,0],[2,2,0,0],[0,0,0,0],[0,0,0,0]],
    3: [[0,2,0,0],[0,2,2,0],[0,0,2,0],[0,0,0,0]],
    colorCode: 2,
    preview: [14.5, 2]
  },
  Z: {
    0: [[0,0,0,0],[3,3,0,0],[0,3,3,0],[0,0,0,0]],
    1: [[0,3,0,0],[3,3,0,0],[3,0,0,0],[0,0,0,0]],
    2: [[3,3,0,0],[0,3,3,0],[0,0,0,0],[0,0,0,0]],
    3: [[0,0,3,0],[0,3,3,0],[0,3,0,0],[0,0,0,0]],
    colorCode: 3,
    preview: [14.5, 2]
  },
  L: {
    0: [[0,4,0,0],[0,4,0,0],[0,4,4,0],[0,0,0,0]],
    1: [[0,0,0,0],[4,4,4,0],[4,0,0,0],[0,0,0,0]],
    2: [[4,4,0,0],[0,4,0,0],[0,4,0,0],[0,0,0,0]],
    3: [[0,0,4,0],[4,4,4,0],[0,0,0,0],[0,0,0,0]],
    colorCode: 4,
    preview: [14, 2.5]
  },
  J: {
    0: [[0,5,0,0],[0,5,0,0],[5,5,0,0],[0,0,0,0]],
    1: [[5,0,0,0],[5,5,5,0],[0,0,0,0],[0,0,0,0]],
    2: [[0,5,5,0],[0,5,0,0],[0,5,0,0],[0,0,0,0]],
    3: [[0,0,0,0],[5,5,5,0],[0,0,5,0],[0,0,0,0]],
    colorCode: 5,
    preview: [15, 2.5]
  },
  I: {
    0: [[0,6,0,0],[0,6,0,0],[0,6,0,0],[0,6,0,0]],
    1: [[0,0,0,0],[6,6,6,6],[0,0,0,0],[0,0,0,0]],
    2: [[0,0,6,0],[0,0,6,0],[0,0,6,0],[0,0,6,0]],
    3: [[0,0,0,0],[0,0,0,0],[6,6,6,6],[0,0,0,0]],
    colorCode: 6,
    preview: [14.5, 2]
  },
  O: {
    0: [[7,7,0,0],[7,7,0,0],[0,0,0,0],[0,0,0,0]],
    1: [[7,7,0,0],[7,7,0,0],[0,0,0,0],[0,0,0,0]],
    2: [[7,7,0,0],[7,7,0,0],[0,0,0,0],[0,0,0,0]],
    3: [[7,7,0,0],[7,7,0,0],[0,0,0,0],[0,0,0,0]],
    colorCode: 7,
    preview: [15, 3]
  }
}

var colors = {
  0: ["#000000"],
  1: ["#0FFBFB", "#009D9F", "#076B74", "#6CFFFF"],
  2: ["#FB7D00", "#A25401", "#6C2E00", "#FFBB33"],
  3: ["#FFFD01", "#9EAA02", "#696A00", "#FFFF76"],
  4: ["#0002F1", "#02039A", "#020063", "#6B6AFE"],
  5: ["#02F600", "#009C00", "#006F00", "#63FF67"],
  6: ["#F50401", "#AB060E", "#6B0100", "#FF7472"],
  7: ["#FE03FD", "#AF03A6", "#73006D", "#FFC5FF"],
  8: ["#585858", "#333333", "#252525", "#9C9C9C"]
}

var KEY = {
  W: 87,
  A: 65,
  S: 83,
  D: 68,
  E: 69
}

var s     = 20,   // size of each block
    cols  = 20,   // number of cols
    rows  = 24,   // number of rows
    fRate = 30;   // framerate

//-------------------------------------------------------------------------
// game variables
//-------------------------------------------------------------------------

var fCounter,     // frame counter
    pieceBag,     // piece bag
    currentPiece, // player's current piece
    nextPiece,    // player's next piece
    rotation,     // current piece rotation code
    score,        // player's score
    lines,        // number of lines cleared by the player
    level,        // game level
    speed,        // current speed
    playerX,      // player's X position
    playerY,      // player's Y position
    paused,       // boolean for pause state
    menu = true;  // boolean for menu state
    
//-------------------------------------------------------------------------
// preload
//-------------------------------------------------------------------------

var retroFont,
    tetrisTheme,
    pauseSound,
    unpauseSound,
    dropSound,
    clearLinesSound,
    gameOverSound;
    
function preload() {
   retroFont       = loadFont( "assets/red-alert.ttf");
   tetrisTheme     = loadSound("assets/tetris-8-bit-theme-song.mp3");
   pauseSound      = loadSound("assets/sfx_sounds_pause3_in.wav");
   unpauseSound    = loadSound("assets/sfx_sounds_pause3_out.wav");
   dropSound       = loadSound("assets/sfx_sounds_impact7.wav");
   clearLinesSound = loadSound("assets/sfx_sounds_powerup18.wav");
   gameOverSound   = loadSound("assets/sfx_sounds_negative1.wav");
}

//-------------------------------------------------------------------------
// main game
//-------------------------------------------------------------------------

function setup() {
  frameRate(fRate);
  createCanvas(cols * s, rows * s);
  textFont(retroFont);
  textAlign(CENTER);
}

function draw() {
  drawGrid();

  if(!menu) {
    drawPiece(playerX, playerY, currentPiece, rotation);
    showPreview();
    showScore();
    showLevel();
    showLines();
  }
  if(!menu && !paused && fCounter % speed == 0) {
    dropPiece();
  }
  fCounter++;
  if(menu) showMenuScreen();
  if(!menu && paused) showPauseScreen();
}

//-------------------------------------------------------------------------
// graphics
//-------------------------------------------------------------------------

function drawGrid() {
  for(var x = 0; x < cols; x++) {
  for(var y = 0; y < rows; y++) {
    drawBlock(x * s, y * s, grid[y][x], 1);
  }}
}

function drawPiece(posX, posY, piece, rotation) {
  var blocks = tetrominoes[piece][rotation];
  for(var x = 0; x < 4; x++) {
  for(var y = 0; y < 4; y++) {
    if(blocks[y][x] !== 0) drawBlock((posX + x) * s, (posY + y) * s, tetrominoes[piece].colorCode, 1);
  }} 
}

function drawBlock(x, y, colorCode, size) {
  size *= s;
  var o = size / 5;
  noStroke();
  fill(colors[colorCode][0]);
  rect(x, y, size, size);
  if(colorCode !== 0) {
    fill(colors[colorCode][1]);
    beginShape();
    vertex(x           , y    );
    vertex(x        + o, y + o);
    vertex(x + size - o, y + o);
    vertex(x + size    , y    );
    endShape();
    fill(colors[colorCode][2]);
    beginShape();
    vertex(x + size    , y           );
    vertex(x + size - o, y        + o);
    vertex(x + size - o, y + size - o);
    vertex(x + size    , y + size    );
    endShape();
    fill(colors[colorCode][3]);
    beginShape();
    vertex(x + size - o, y + size - o);
    vertex(x        + o, y + size - o);
    vertex(x           , y + size    );
    vertex(x + size    , y + size    );
    endShape();
  }
}

function showMenuScreen() {
  noStroke();
  fill(colors[0][0]);
  rect(2 * s, 2 * s, 10 * s, 20 * s);
  // text
  stroke(255);
  fill(255);
  textSize(2 * s);
  text("TETRIS", 3 * s, 6 * s, 8 * s, 3 * s);
  textSize(s);
  noStroke();
  text("by arturham", 3 * s, 8 * s, 8*s, 3*s);
  text("Press 'E' to start game", 3 * s, 12 * s, 8 * s, 3 * s);
  text("Use 'W', 'A', 'S', 'D' to move and 'ENTER' to pause",
       3 * s, 16 * s, 8 * s, 4 * s);  

  noStroke();
  fill(colors[0][0]);
  rect(14 * s, 2 * s, 4 * s, 4 * s);
  rect(13 * s, 7 * s, 6 * s, 2 * s);
  rect(13 * s, 10 * s, 6 * s, 2 * s);
  rect(13 * s, 13 * s, 6 * s, 2 * s);
  
  if(score) {
    showScore();
    showLevel();
    showLines();
  }
}

function showPauseScreen() {
  noStroke();
  fill(colors[0][0]);
  rect(2 * s, 2 * s, 10 * s, 20 * s);
  // text
  stroke(255);
  fill(255);
  textSize(2 * s);
  text("PAUSED", 3 * s, 6 * s, 8 * s, 3 * s);
}

function showPreview() {
  noStroke();
  fill(colors[0][0]);
  rect(14 * s, 2 * s, 4 * s, 4 * s);
  drawPiece(tetrominoes[nextPiece].preview[0],
            tetrominoes[nextPiece].preview[1], nextPiece, 0);
}

function showScore() {
  var str = "Score : " + score;
  noStroke();
  fill(colors[0][0]);
  rect(13 * s, 7 * s, 6 * s, 2 * s);
  // text
  noStroke();
  fill(255);
  textSize(s);
  text(str, 13 * s, 8 * s, 6 * s, 2 * s);
}

function showLines() {
  var str = "Lines : " + lines;
  noStroke();
  fill(colors[0][0]);
  rect(13 * s, 10 * s, 6 * s, 2 * s);
  // text
  noStroke();
  fill(255);
  textSize(s);
  text(str, 13 * s, 11*s, 6 * s, 2 * s);
  
}

function showLevel() {
  var str = "Level : " + level;
  noStroke();
  fill(colors[0][0]);
  rect(13 * s, 13 * s, 6 * s, 2 * s);
  // text
  noStroke();
  fill(255);
  textSize(s);
  text(str, 13 * s, 14 * s, 6 * s, 2 * s);
}

//-------------------------------------------------------------------------
// logic
//-------------------------------------------------------------------------
function dropPiece() {
  if(!collision(playerX, playerY + 1, currentPiece, rotation)) {
    // move piece if no collision
    playerY += 1;
    fCounter = 1;
  }
  else {
    // if collision
    pushPiece(playerX, playerY, currentPiece, rotation);
    clearLines();
    setPieces();
    // place next piece on top
    if(!collision(playerX, 2, currentPiece, rotation)) playerY = 2;
    else {
      // game over
      tetrisTheme.stop();
      gameOverSound.play();
      menu = true;
    }
  }
}

function movePiece(dir) {
  if(!collision(playerX + dir, playerY, currentPiece, rotation)) playerX += dir;
}

function rotatePiece() {
  var r = rotation + 1;
  if(r > 3) r = 0;
  if(!collision(playerX, playerY, currentPiece, r)) rotation = r;
}

function pushPiece(posX, posY, piece, rotation) {
  var blocks = tetrominoes[piece][rotation];
  for(var x = 0; x < 4; x++) {
  for(var y = 0; y < 4; y++) {
    if(blocks[y][x] !== 0) grid[posY + y][posX + x] = tetrominoes[piece].colorCode;
  }} 
  dropSound.play();
}

function collision(posX, posY, piece, rotation) {
  var result = false;
  var blocks = tetrominoes[piece][rotation];
  for(var x = 0; x < 4; x++) {
  for(var y = 0; y < 4; y++) {
    if(blocks[y][x] !== 0 && grid[posY + y][posX + x] !== 0) result = true;
  }}
  return result;
}    

function clearGrid() {
  for(var x = 0; x < cols; x++) {
  for(var y = 0; y < rows; y++) {
    if(grid[y][x] !== 8 && grid[y][x] !== 0) grid[y][x] = 0;
  }}
}

function clearLines() {
  var linesCleared = 0;
  for(var y = 0; y < rows; y++) {
    var counter = 0;
    for(var x = 0; x < cols; x++) {
      if(grid[y][x] !== 8 && grid[y][x] !== 0) counter++;
    }
    // if line completed
    if(counter == 10) {
      linesCleared++;
      // remove line
      grid.splice(y, 1);
      grid.unshift([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]);
      grid[2] =    [8,8,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8];
    }
  }
  if(linesCleared > 0) {
    // update score
    setScore(linesCleared);
    lines += linesCleared;
    constrain(lines, 0, 999);
    // increase level every 5 lines
    if(lines % 5 == 0) {
      level = lines / 5;
      constrain(level, 0, 10);
      setSpeed();
    }
    clearLinesSound.play();
  }
}

function setPieces() {
  if(pieceBag.length == 0) 
    pieceBag = ["T","T","T","T",
                "S","S","S","S","Z","Z","Z","Z",
                "L","L","L","L","J","J","J","J",
                "O","O","O","O","I","I","I","I"];
  if(!currentPiece) {
    currentPiece = pieceBag.splice(random(0, pieceBag.length), 1)[0];
    nextPiece    = pieceBag.splice(random(0, pieceBag.length), 1)[0];
  } else {
    currentPiece = nextPiece;
    nextPiece    = pieceBag.splice(random(0, pieceBag.length), 1)[0];
  }
  playerX = 5;
  playerY = 2;
  rotation = 0;
}

function setSpeed() {
  speed = Math.floor((1 - (level * 0.085)) * fRate) + 1;
}

function setScore(n) {
  switch(n) {
    case 1: score += 40   * (level + 1); break;
    case 2: score += 100  * (level + 1); break;
    case 3: score += 300  * (level + 1); break;
    case 4: score += 1200 * (level + 1); break;
  }
}

function resetGame() {
  fCounter = 1,  
  pieceBag = [],   
  currentPiece = null,
  nextPiece = null,
  rotation = 0,  
  score = 0,       
  lines = 0,        
  level = 0,                
  paused = false,     
  menu = false;
  
  clearGrid();
  setSpeed();
  setPieces();
  
  //startGameSound.play();
  tetrisTheme.play();
  tetrisTheme.loop();
  tetrisTheme.setVolume(.4);
}

function pauseGame() {
  paused = !paused;
  if(paused) {
    pauseSound.play();
    tetrisTheme.setVolume(0);
  }
  else {
    unpauseSound.play();
    tetrisTheme.setVolume(.4);
  }
}

//-------------------------------------------------------------------------
// events
//-------------------------------------------------------------------------

function keyPressed() {
  if(menu  && keyCode == KEY.E) resetGame();
  if(!menu && keyCode == ENTER) pauseGame();
  // movement
  if(!paused && keyCode == KEY.D) movePiece( 1);
  if(!paused && keyCode == KEY.A) movePiece(-1);
  if(!paused && keyCode == KEY.W) rotatePiece();
  if(!paused && keyCode == KEY.S) dropPiece();
}