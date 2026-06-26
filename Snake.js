let jeuLance = false;
let score = 0; 

function setup() {
  createCanvas(400, 400);
  snake = [];
  snake.push([90, 90]);
  snake.push([90, 100]);
  snake.push([90, 110]);
  snake_direction = "right";
  
  apples = [];
  create_apples();
  stars = [] ;
  create_stars();
  diamonds = [];
  create_diamonds();
  dices = [];
  create_dices();
  score = 0;
}

function create_apples() {
  for (i = 0; i < 10; i++) {
    x = Math.floor(random(0, 40));
    y = Math.floor(random(0, 40));
    apples.push([x * 10, y * 10]);
  }
}
function create_stars() {
  for (i = 0; i < 5; i++) {
    x = Math.floor(random(0, 40));
    y = Math.floor(random(0, 40));
    stars.push([x * 10, y * 10]);
  }
}
function draw_stars() {
  textSize(10); 
  textAlign(CENTER, CENTER); 
  stars.forEach((star) => {
    text("⭐", star[0] + 5, star[1] + 5); 
  });
}
function create_diamonds() {
  for (i = 0; i < 1; i++) {
    x = Math.floor(random(0, 40));
    y = Math.floor(random(0, 40));
    diamonds.push([x * 10, y * 10]);
  }
}
function draw_diamonds() {
  textSize(10); 
  textAlign(CENTER, CENTER); 
  diamonds.forEach((diamond) => {
    text("💎", diamond[0] + 5, diamond[1] + 5); 
  });
}
function create_dices() {
  for (i = 0; i < 1; i++) {
    x = Math.floor(random(0, 40));
    y = Math.floor(random(0, 40));
    dices.push([x * 10, y * 10]);
  }
}
function draw_dices() {
  textSize(10); 
  textAlign(CENTER, CENTER); 
  dices.forEach((dice) => {
    text("🎲", dice[0] + 5, dice[1] + 5); 
  });
}

function draw_apples() {
  textSize(10); 
  textAlign(CENTER, CENTER); 
  apples.forEach((apple) => {
    text("🍎", apple[0] + 5, apple[1] + 5); 
  });
}

function keyPressed() {
  if (!jeuLance && (key === 's' || key === 'S')) {
    jeuLance = true;
    setInterval(() => {
      keyPressed();
      next_direction();
      move_snake();
    }, 250);
  }

  if (keyCode == UP_ARROW && snake_direction != "down") {
    snake_direction = "up";
  } else if (keyCode == DOWN_ARROW && snake_direction != "up") {
    snake_direction = "down";
  } else if (keyCode == LEFT_ARROW && snake_direction != "right") {
    snake_direction = "left";
  } else if (keyCode == RIGHT_ARROW && snake_direction != "left") {
    snake_direction = "right";
  }

  return false;
}

function next_direction() {
  snake_next_direction = null;
  if (snake_direction == "up") {
    snake_next_direction = [snake[0][0], snake[0][1] - 10];
 }
 else if (snake_direction == "down") {
    snake_next_direction = [snake[0][0], snake[0][1] + 10];
 }
 else if (snake_direction == "left") {
    snake_next_direction = [snake[0][0] - 10, snake[0][1]];
 }
 else if (snake_direction == "right") {
    snake_next_direction = [snake[0][0] + 10, snake[0][1]];
  }
}

function move_snake() {
  check_collision();
  exit_arena();
  head = snake[0];
  eat = false;
  apples.forEach((apple) => {
    if (head[0] == apple[0] && head[1] == apple[1]) {
      pos = apples.indexOf(apple);
      apples.splice(pos, 1);
      eat = true;
      
      score += 10; 

      let new_x = Math.floor(random(0, 40));
      let new_y = Math.floor(random(0, 40));
      apples.push([new_x * 10, new_y * 10]);
    }
  })
  stars.forEach((star) => {
    if (head[0] == star[0] && head[1] == star[1]) {
      pos = stars.indexOf(star);
      stars.splice(pos, 1);
      eat = true;
      
      score += 20; 

      let new_x1 = Math.floor(random(0, 40));
      let new_y1 = Math.floor(random(0, 40));
      stars.push([new_x1 * 10, new_y1 * 10]);
      snake.unshift(snake_next_direction); 
    }
  })
  diamonds.forEach((diamond) => {
    if (head[0] == diamond[0] && head[1] == diamond[1]) {
      pos = diamonds.indexOf(diamond);
      diamonds.splice(pos, 1);
      eat = true;
      
      score += 50; 

      let new_x2 = Math.floor(random(0, 40));
      let new_y2 = Math.floor(random(0, 40));
      diamonds.push([new_x2 * 10, new_y2 * 10]);
      snake.unshift(snake_next_direction); 
      snake.unshift(snake_next_direction); 
      snake.unshift(snake_next_direction); 
      snake.unshift(snake_next_direction); 
    }
  })
  dices.forEach((dice) => {
    if (head[0] == dice[0] && head[1] == dice[1]) {
      pos = dices.indexOf(dice);
      dices.splice(pos, 1);
      eat = true;
      alea= Math.floor(random(1,3))
      if (snake.length > 10){
       if (alea==1){
        score += 100; 
        for (tkt=0; tkt<9;tkt++){
        snake.unshift([snake_next_direction[0],snake_next_direction[1]]);
       }}
       if (alea==2){
        score -= 100; 
        for (tktap=0; tktap<11;tktap++){
        snake.pop();
      }}
      let new_x4 = Math.floor(random(0, 40));
      let new_y4 = Math.floor(random(0, 40));
      dices.push([new_x4 * 10, new_y4 * 10]);
      snake.unshift(snake_next_direction); 
    }
}});
  if (eat == false) {
    snake.pop(); 
  }
  snake.unshift(snake_next_direction); 
}

function check_collision() {
  head = snake[0];
  snake.forEach((element) => {
    if (head != element && head[0] == element[0] && head[1] == element[1]) {
      noLoop();
    }
  });
}
function exit_arena() {
  if (snake_next_direction[0] < 0) {
    snake_next_direction[0] = 390;
  } else if (snake_next_direction[0] >= 400) {
    snake_next_direction[0] = 0;
  }
  if (snake_next_direction[1] < 0) {
    snake_next_direction[1] = 390;
  } else if (snake_next_direction[1] >= 400) {
    snake_next_direction[1] = 0;  
  }
}
function draw() {
  background(20, 30, 50); 
  
  stroke(255, 255, 255, 30); 
  for (i=0; i < 40; i++)
  {
   line(i*10,0,i*10,400);
   line(0, i*10,400,i*10);
  }
  
  snake.forEach((element, index) => {
    colorMode(HSB, 255); 
    let teinte = (index * 15) % 255; 
    fill(teinte, 200, 255);
    stroke(teinte, 255, 255);
    rect(element[0], element[1], 10, 10);
    colorMode(RGB, 255); 
  });
  
  draw_apples();
  draw_stars();
  draw_diamonds();
  draw_dices()

  fill(255);
  noStroke();
  textSize(20);
  textAlign(LEFT, TOP); 
  text("Score : " + score, 10, 10);
}