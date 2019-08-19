; (function (w, d) {

  let position = 'absolute';
  let elements = []; //用于缓存创建的食物
  // 食物
  // 属性：坐标(x,y) 大小(w,h)
  // 方法：render
  function Food(options) {
    options = options || {};
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.width = options.width || 10;
    this.height = options.height || 10;

  }

  Food.prototype.render = function (map) {
    //创建之前，先删除原有食物
    remove();

    // 渲染，创建元素，添加到map中
    // 1创建元素
    let element = document.createElement('div');

    //缓存食物，以备删除
    elements.push(element);

    //2设置元素属性
    // 设置随机坐标
    let x = Tool.getRandom(0, map.offsetWidth / this.width - 1);
    let y = Tool.getRandom(0, map.offsetHeight / this.height - 1);
    element.style.top = y * this.width + 'px';
    element.style.left = x * this.height + 'px';

    // console.log(x);
    // console.log(y);

    element.style.width = this.width + 'px';
    element.style.height = this.height + 'px';
    element.style.backgroundColor = 'blue';
    element.style.position = position;

    //3追加到map中
    map.appendChild(element);

  }
  function remove() {
    // 反向遍历，删除数组中所有元素
    for (let i = elements.length - 1; i >= 0; i--) {
      //拿到食物父节点
      let parentNode = elements[i].parentNode;
      parentNode.removeChild();
      elements.splice(i,1);
    }
  }

  w.Food = Food;

})(window, undefined)

// 测试
let map = document.getElementById('map');
let food = new Food();
food.render(map);
// console.log(Tool.getRandom(0, 10));