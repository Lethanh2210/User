"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var user1 = new User_1.User("Phu", 2, '123@gmail.com');
console.log(user1.getInfo());
user1.isAmin();
