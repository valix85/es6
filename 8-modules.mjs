//For use this file install quokka.js in visual studio code and enable it on this file.

//https://thinkster.io/tutorials/node-json-api/initializing-a-starter-node-project

//install @std/esm
//npm i --save-dev @std/esm

//use this file with
//node -r @std/esm 8-modules.mjs

import {add} from "./add.mjs";
import {add as MySum, sub as minus} from "./add.mjs";

import * as MyUtilLib from "./add.mjs";

const value = add(3,5);
console.log(value);

const value2 = MySum(5,5);
console.log(value2);
console.log(minus(5,2));


console.log(MyUtilLib);
console.log(MyUtilLib.sub(10,2));

import defy from "./def.mjs"; //to2 and to3 will be not imported
console.log(defy)


