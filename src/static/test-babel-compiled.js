'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

require('babel-polyfill');

// 调用babel test-babel.js --presets es2015，即可转为ES5代码
[1, 2, 3].map(function (x) {
    return x * x;
});

var someModule = function () {
    "use strict";

    var init = function init() {};

    return {
        init: init
    };
}();

{
    var _init3 = function _init3() {};
};

console.log(init);
console.log(_init);
console.log(_init2);

function f() {
    console.log('aaa');
}

function a() {
    return [1, 2, 3];
}

var _a = a();

var _a2 = _slicedToArray(_a, 1);

var _a2$ = _a2[0];
var x = _a2$ === undefined ? f() : _a2$;
var _hello = 'hello';

var _hello2 = _slicedToArray(_hello, 5);

var aa = _hello2[0];
var bb = _hello2[1];
var c = _hello2[2];
var d = _hello2[3];
var e = _hello2[4];

// 我们考虑创建一个函数，他不允许参数为undefined，即没有传参，如果不为undefined了，他还不允许参数没有x或者
// y属性，如果没有，就采用默认值

// 这种相当于2道关卡，要传入的参数不是undefined，并且他有x和y属性，才会返回成功

function move() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 1 };

    var _ref$x = _ref.x;
    var x = _ref$x === undefined ? 0 : _ref$x;
    var _ref$y = _ref.y;
    var y = _ref$y === undefined ? 0 : _ref$y;

    return [x, y];
}
move({ x: 3, y: 8 }); // [3, 8]
move({ x: 3 }); // [3, 0]
move(); // [1, 0]
move({}); // [0, 0]

// 这种相当于1道关卡，只要有x和y属性，就会返回成功，但是忽略掉了参数本身是undefiend的情况（move2()）
function move2(_ref2) {
    var _ref2$x = _ref2.x;
    var x = _ref2$x === undefined ? 0 : _ref2$x;
    var _ref2$y = _ref2.y;
    var y = _ref2$y === undefined ? 0 : _ref2$y;

    return [x, y];
}

move2({ x: 3, y: 8 }); // [3, 8]
move2({ x: 3 }); // [3, 0]
move2(); // Cannot match against 'undefined' or 'null'
move({}); // [0, 0]

// 这种相当于1道关卡，只要参数本身不是undefined，就会去返回，但是忽略了参数没有x或者y属性的情况
function move3() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 };

    var x = _ref3.x;
    var y = _ref3.y;

    return [x, y];
}

move3({ x: 3, y: 8 }); // [3, 8]
move3({ x: 3 }); // [3, undefined]
move3(); // [0, 0]
move3({}); // [undefined, undefined]

var x1 = 1,
    y1 = 2;
var _ref4 = [y1, x1];
x1 = _ref4[0];
y1 = _ref4[1];


function f1(_ref5) {
    var _ref6 = _slicedToArray(_ref5, 3);

    var x = _ref6[0];
    var y = _ref6[1];
    var z = _ref6[2];
}
f1([1, 2, 3]);

//# sourceMappingURL=test-babel-compiled.js.map