; (function (w) {
  let Tool = {
    // 获取随机值
    getRandom: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  };
  w.Tool = Tool;
})(window)