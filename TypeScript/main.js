"use strict";
exports.__esModule = true;
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log("llikesCount:" + component.likesCount + ",isSelected:" + component.isSelected);
