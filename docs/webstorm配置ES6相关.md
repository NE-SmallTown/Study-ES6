#### webstorm配置babel实现自动将ES6转为ES5

- File Type：配置该监听器监听的文件类型，可以在Preferences > Editor > File types中配置
- Scope：配置该监听器的监听范围，可自定义新的范围，也可以使用Preferences > Appearance & Behavior > Scopes
- Program：babel的安装位置
- Arguments：命令执行参数，参见[Babel CLI](https://babeljs.io/docs/usage/cli/)
- Working directory：babel命令执行的位置，默认为文件所在目录

- 以下是英文说明:
- Name: the watcher Babel (or whatever) and give it a description if you like.

- File type: JavaScript.

- Scope: Create a Scope and scope it to the directory containing your source files (in this project, that is src).
It’s important to set the scope properly because this is the directory that WebStorm watches, which is not necessarily the directory the program will operate on.  So initially I set this to be the project directory since the Babel already accepts a directory it should transpile, but I ran into issues because the watcher would get into a tight loop: Babel would output into a project directory which would retrigger the watcher, which would transpile, which would output new files and trigger the watcher again…infinity!   For more information on setting up a scope, check out the WebStorm docs on this subject.

- Program: For the Program select the runbabel.cmd that was created earlier, if you have it within your project, you can use the $ProjectFileDir$ macro to locate the command.

- Arguments: The Arguments can now be any arguments that the Babel CLI accepts.  In this case we’re saying that it should run on the src directory and output to the lib directory.




#### 转码集
```

# ES2015转码规则
$ npm install --save-dev babel-preset-es2015

# react转码规则
$ npm install --save-dev babel-preset-react

# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3

```




#### babel-register

> babel-register模块改写require命令，为它加上一个钩子。此后，每当使用require加载.js、.jsx、.es和.es6后缀名的文件，就会先用Babel进行转码。
$ npm install --save-dev babel-register
使用时，必须首先加载babel-register。
>
require("babel-register");
require("./index.js");




#### babel-core
如果某些代码需要调用Babel的API进行转码，就要使用babel-core模块。
安装命令如下。

```

$ npm install babel-core --save
然后，在项目中就可以调用babel-core。

var babel = require('babel-core');

// 字符串转码
babel.transform('code();', options);
// => { code, map, ast }

// 文件转码（异步）
babel.transformFile('filename.js', options, function(err, result) {
  result; // => { code, map, ast }
});

// 文件转码（同步）
babel.transformFileSync('filename.js', options);
// => { code, map, ast }

// Babel AST转码
babel.transformFromAst(ast, code, options);
// => { code, map, ast }
配置对象options，可以参看官方文档http://babeljs.io/docs/usage/options/。
下面是一个例子。

var es6Code = 'let x = n => n + 1';
var es5Code = require('babel-core')
  .transform(es6Code, {
    presets: ['es2015']
  })
  .code;
// '"use strict";\n\nvar x = function x(n) {\n  return n + 1;\n};'
上面代码中，transform方法的第一个参数是一个字符串，表示需要转换的ES6代码，第二个参数是转换的配置对象。

```



#### babel-polyfill

```
Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。
举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。
安装命令如下。

$ npm install --save babel-polyfill
然后，在脚本头部，加入如下一行代码。

import 'babel-polyfill';
// 或者
require('babel-polyfill');
Babel默认不转码的API非常多，详细清单可以查看babel-plugin-transform-runtime模块的definitions.js文件

```



```
对于 export default {} 支持不好，还得加个插件 babel-plugin-add-module-exports：
"plugins": [
"add-module-exports"
]

```