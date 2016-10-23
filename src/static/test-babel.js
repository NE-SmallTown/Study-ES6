import 'babel-polyfill';

// 调用babel test-babel.js --presets es2015，即可转为ES5代码
[1, 2, 3].map((x) => x * x);

var someModule = function() {
    "use strict";
    var init = function(){};

    return {
        init: init
    }
}();


{
    let init = function(){};
};

console.log(init);
console.log(_init);
console.log(_init2);


function f() {
    console.log('aaa');
}

function a() {return [1, 2, 3];}

let [x = f()] = a();

const [aa, bb, c, d, e] = 'hello';

// 我们考虑创建一个函数，他不允许参数为undefined，即没有传参，如果不为undefined了，他还不允许参数没有x或者
// y属性，如果没有，就采用默认值

// 这种相当于2道关卡，要传入的参数不是undefined，并且他有x和y属性，才会返回成功
function move({x = 0, y = 0} = {x: 1}) {
    return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move(); // [1, 0]
move({}); // [0, 0]

// 这种相当于1道关卡，只要有x和y属性，就会返回成功，但是忽略掉了参数本身是undefiend的情况（move2()）
function move2({x = 0, y = 0}) {
    return [x, y];
}

move2({x: 3, y: 8}); // [3, 8]
move2({x: 3}); // [3, 0]
move2(); // Cannot match against 'undefined' or 'null'
move({}); // [0, 0]

// 这种相当于1道关卡，只要参数本身不是undefined，就会去返回，但是忽略了参数没有x或者y属性的情况
function move3({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}

move3({x: 3, y: 8}); // [3, 8]
move3({x: 3}); // [3, undefined]
move3(); // [0, 0]
move3({}); // [undefined, undefined]

let x1 = 1, y1 = 2;
[x1, y1] = [y1, x1];

function f1([x, y, z]) {}
f1([1, 2, 3]);



























































