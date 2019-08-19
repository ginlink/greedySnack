; (function (w, u) {

  //测试
  let food = new Food();
  let snake = new Snake();
  let map = document.getElementById('map');

  let game = new Game({ food: food, snake: snake, map: map });
  game.start();
})(window, undefined)