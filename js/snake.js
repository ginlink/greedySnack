; (function (w, u) {
  /**
   * 蛇对象
   * property: 
   *   position(x,y) no position, the x,y is in the body
   *   size(w,h) the node of snake 蛇节
   *   direction(right|top|left|bottom)
   *   body(the snake's body includes head and body)
   * 
   * method: 
   *   render
   *   move
   * 
   * function:
   *   remove
   */

  let elements = [];
  let position = 'absolute';

  function Snake(options) {
    options = options || {};
    // this.x = options.x || 0;
    // this.y = options.y || 0;
    this.width = options.width || 10; //width: the part of snake
    this.height = options.height || 10;
    this.direction = options.direction || 'right';

    this.body = [
      { x: 3, y: 2, color: 'red' },
      { x: 2, y: 2, color: 'blue' },
      { x: 1, y: 2, color: 'blue' }
    ];


  }
  //method
  Snake.prototype.render = function (map) {
    remove();

    //1 create the snake
    for (let i = 0, len = this.body.length; i < len; i++) {
      let element = document.createElement('div');
      //push it into the vector
      elements.push(element);
      //2 setting the snake's attribute
      element.style.left = this.body[i].x * this.width + 'px';
      element.style.top = this.body[i].y * this.height + 'px';
      element.style.width = this.width + 'px';
      element.style.height = this.height + 'px';

      element.style.backgroundColor = this.body[i].color;
      element.style.position = position;

      //2 push the snake into map
      map.appendChild(element);
    }
  }

  Snake.prototype.move = function () {
    //1 move the body
    for (let i = this.body.length - 1; i >= 1; i--) {
      //follow the front node 蛇节
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    //2 move the head
    //decide the direction
    switch (this.direction) {
      case 'top':
        // elements[i].style.left = 
        //change the body's x,y
        this.body[0].y--;
        break;
      case 'right':
        this.body[0].x++;
        break;
      case 'bottom':
        this.body[0].y++;
        break;
      case 'left':
        this.body[0].x--;
        break;
    }

    //notes: Why not move the head first?
    // because if that, the near head body will follow the head, and occupy the head position
    // 靠近头结点的结点会覆盖上一个结点的位置（也就是头结点），所以要先蛇身后蛇头，
    // 还可以先将蛇头位置缓存下来，后面顺序怎么样都可以

  }

  function remove() {
    //delete all the snake elements
    for (let i = elements.length - 1; i >= 0; i--) {
      //remove from the map el
      let map = elements[i].parentNode; //the map can be optimized 优化
      map.removeChild(elements[i]);
      elements.splice(i, 1);
    }
  }

  w.Snake = Snake;
})(window, undefined)


//测试
// let snake = new Snake();
// let map = document.getElementById('map');
// snake.render(map);
// snake.move();
// snake.render(map);
// let time = 750;
// setInterval(() => {

//   snake.move();
//   snake.render(map);
// }, time);