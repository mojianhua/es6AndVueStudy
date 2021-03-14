"use strict";

//转码前
//定义数据
var input = [1, 2, 3];
//将每个数据的每个元素+1
input = input.map(function (intem) {
  return intem + 1;
});
console.log(input);
