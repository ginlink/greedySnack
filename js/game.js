; (function (w, u) {
  /**
   * the object of Game
   * property:
   *  food
   *  snake
   *  map
   * 
   * method:
   *  start(start the game)
   * 
   * function:
   *  stop(stop the game)
   * 
   */

  let timeID;
  function Game(options) {
    // options = options || {}; forbid {}
    this.food = options.food;
    this.snake = options.snake;
    this.map = options.map;
  }

  Game.prototype.start = function () {
    //1 game start
    //food is work
    this.food.render(this.map);
    
    //2 keyborad control the snake .
    bindKey(this);

    if (timeID) {
      clearInterval(timeID);
    }
    //snake is work
    timeID = setInterval(() => {
      //3 meet fodd and eat it .
      eatFood(this);

      //4 game over
      gameOver(this);

      this.snake.render(this.map);
      this.snake.move();

    }, 150);


  }

  function gameOver(that) {

    //is wall?
    let x = that.snake.body[0].x;
    let mX = that.map.offsetWidth / that.snake.width;
    let y = that.snake.body[0].y;
    let mY = that.map.offsetHeight / that.snake.height;
    // console.log(x + ' ' + y);
    // console.log(mX + ' ' + mY);
    // console.log(this.map.offsetWidth);
    // console.log(this.snake.width);

    if (x >= mX || y >= mY || x < 0 || y < 0) {
      clearInterval(timeID);
      alert("game over");
    }
  }

  function bindKey(that) {

    addEventListener('keydown', (e) => {

      // console.log(e.keyCode);
      switch (e.keyCode) {
        case 38:
          that.snake.direction = 'top';
          break;
        case 39:
          that.snake.direction = 'right';
          break;
        case 40:
          that.snake.direction = 'bottom';
          break;
        case 37:
          that.snake.direction = 'left';
          break;
      }
    });
  }

  function eatFood(that) {
    //get snake's head position
    //get food's position
    let snakeX = that.snake.body[0].x * that.snake.width;
    let foodX = that.food.x * that.food.width;
    let snakeY = that.snake.body[0].y * that.snake.height;
    let foodY = that.food.y * that.food.height;

    // console.log(snakeX +' '+ snakeY);
    // console.log(foodX +' '+ foodY);

    if (snakeX === foodX && snakeY === foodY) {
      //delete the food
      //increate the snake
      that.food.render(that.map);
      let last = that.snake.body[that.snake.body.length - 1];
      that.snake.body.push({ x: last.x, y: last.y, color: last.color });
    }

  }

  w.Game = Game;
})(window, undefined)
