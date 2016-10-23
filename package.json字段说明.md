 * name - 包名。
 * version - 包的版本号。
 * description - 包的描述。
 * homepage - 包的官网 url 。
 * author - 包的作者姓名。
 * contributors - 包的其他贡献者姓名。
 * dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
 * repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
 * main - main 字段是一个模块ID，它是一个指向你程序的主要项目。就是说，如果你包的名字叫 express，然后用户安装它，然后require("express")。
 * keywords - 关键字
 * 在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
 * 使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
 * 使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。
 * 使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
 * 使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。
