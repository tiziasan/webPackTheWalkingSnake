'use strict';

import {setStyle} from './styler';
import {setHTML} from './components';

{
  setHTML();
  let snake = [
    {
      x: 320,
      y: 320,
    }];

  let foodX;
  let foodY;
  let fireX;
  let fireY;
  let filoX;
  let filoY;
  let bulletX;
  let bulletY;
  let score = 0;
  let changingDirection = false;
  let dx = 80;
  let dy = 0;
  let gameOver = false;
  let gameCanvas = document.getElementById('gameCanvas');
  let divScore = document.getElementById('score');
  let ctx = gameCanvas.getContext('2d');

  function start() {
    gameOver = false;
    main();
    createFood();
    createFire();
    createFilo();
    createBullet();

  }

  function main() {
    document.addEventListener('keydown', changeDirection);
    if (gameOver) return;
    didGameEnd();

    setTimeout(function onTick() {
      changingDirection = false;
      clearCanvas();
      drawFood();
      drawFire();
      drawFilo();
      moveSnake();
      drawSnake();
      moveBullet();
      drawBullet();
      main();
    }, document.getElementById('speed').value);
  }

  setStyle(gameCanvas, {
    position: 'absolute',
    marginLeft: '50%',
    top: '50%',
    left: '3%',
    transform: 'translate(-50%, -50%)',
  });
  setStyle(divScore, {
    textAlign: 'left',
    fontSize: '280px',
  });

  function moveSnake() {
    let head = {
      x: snake[0].x + dx,
      y: snake[0].y + dy,
    };
    snake.unshift(head);

    let didEatFood = snake[0].x === foodX && snake[0].y === foodY;
    if (didEatFood) {
      score += 1;
      document.getElementById('score').innerHTML = score;
      createFood();
      createFilo();
      createFire();
      createBullet();
    } else {
      snake.pop();
    }
  }

  function moveBullet() {
    bulletX += 80;
    let hitRightWall = bulletX > gameCanvas.width - 80;
    if (hitRightWall){
      bulletX = 80;
    }
  }

  function changeDirection(event) {
    if (changingDirection) return;
    changingDirection = true;

    let keyPressed = event.key;
    let goingUp = dy === -80;
    let goingDown = dy === 80;
    let goingRight = dx === 80;
    let goingLeft = dx === -80;

    if (keyPressed === 'ArrowLeft' && !goingRight) {
      dx = -80;
      dy = 0;
    }

    if (keyPressed === 'ArrowUp' && !goingDown) {
      dx = 0;
      dy = -80;
    }

    if (keyPressed === 'ArrowRight' && !goingLeft) {
      dx = 80;
      dy = 0;
    }

    if (keyPressed === 'ArrowDown' && !goingUp) {
      dx = 0;
      dy = 80;
    }
  }

  function drawSnake() {
    snake.forEach(drawSnakePart);
  }

  function drawSnakePart(snakePart) {
    let snake = document.getElementById('snake');

    ctx.drawImage(snake, snakePart.x, snakePart.y, 80, 80);
    //ctx.fillStyle = SNAKE_COLOUR;
    //ctx.strokestyle = SNAKE_BORDER_COLOUR;
    //ctx.fillRect(snakePart.x, snakePart.y, 80, 80);
    //ctx.strokeRect(snakePart.x, snakePart.y, 80, 80);
  }

  function clearCanvas() {
    ctx.fillStyle = '#ffffff';
    ctx.strokestyle = '#000000';
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
  }

  function alertMessage() {
    this.gameOver = 'Game Over, your score is: ';
    this.sayMessage = () => alert(
        this.gameOver + score + this.playAgainMessage);
  };

  alertMessage.prototype.playAgainMessage = '     Play again!!';

  function didGameEnd() {

    let message = new alertMessage();
    for (let i = 3; i < snake.length; i++) {
      if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
        snake = [
          {
            x: 320,
            y: 320,
          }];
        gameOver = true;
        message.sayMessage();
        score = 0,
            document.getElementById('score').innerHTML = score;

        ;

      }
    }

    let hitLeftWall = snake[0].x < 0;
    let hitRightWall = snake[0].x > gameCanvas.width - 80;
    let hitTopWall = snake[0].y < 0;
    let hitBottomWall = snake[0].y > gameCanvas.height - 80;
    let hitBullet = snake[0].x === (bulletX -80) && snake[0].y === bulletY;
    let hitFire = snake[0].x === fireX && snake[0].y === fireY;
    let hitFilo = snake[0].x === filoX && snake[0].y === filoY;

    if (hitLeftWall || hitRightWall || hitTopWall || hitBottomWall || hitFire || hitFilo || hitBullet) {
      snake = [
        {
          x: 320,
          y: 320,
        }];
      gameOver = true;
      message.sayMessage();
      score = 0;
      document.getElementById('score').innerHTML = score;
    }
  }

  function randomTen(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 80) * 80;
  }

  function createFood() {
    foodX = randomTen(0, gameCanvas.width - 80);
    foodY = randomTen(0, gameCanvas.height - 80);

    snake.forEach(function isFoodOnSnake(part) {
      let foodIsOnSnake = part.x === foodX && part.y === foodY;
      let fireIsOnSnake = part.x === fireX && part.y === fireY;
      let filoIsOnSnake = part.x === filoX && part.y === filoY;
      if (foodIsOnSnake || filoIsOnSnake || fireIsOnSnake) {
        createFood();
      }
    });
  }

  function createFire() {
    fireX = randomTen(0, gameCanvas.width - 80);
    fireY = randomTen(0, gameCanvas.height - 80);
    let fireIsOnFood = fireX === foodX && fireY === foodY;
    let fireIsOnFilo = fireX === filoX && fireY === filoY;
    if (fireIsOnFilo || fireIsOnFood){
      createFire();
      createFilo();
    }

  }

  function createFilo() {
    filoX = randomTen(0, gameCanvas.width - 80);
    filoY = randomTen(0, gameCanvas.height - 80);
  }

  function createBullet() {
    bulletX = foodX + 80;
    bulletY = foodY;

  }

  function drawFood() {
    let mouse = document.getElementById('mouse');
    ctx.drawImage(mouse, foodX, foodY, 80, 80);

    //ctx.fillStyle = FOOD_COLOUR;
    //ctx.strokestyle = FOOD_BORDER_COLOUR;
    //ctx.fillRect(foodX, foodY, 80, 80);
    //ctx.strokeRect(foodX, foodY, 80, 80);
  }

  function drawFire() {
    let fire = document.getElementById('fuoco');
    ctx.drawImage(fire, fireX, fireY, 80, 80);
  }

  function drawFilo() {
    let filo = document.getElementById('filo');
    ctx.drawImage(filo, filoX, filoY, 80, 80);
  }

  function drawBullet() {
    let bullet = document.getElementById('bullet');

    ctx.drawImage(bullet, bulletX, bulletY, 80, 80);

  }

}
