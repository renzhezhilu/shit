##### 01.全局安装vue-cli
```javascript
npm install vue-cli -g
```
> 如报错无权限，加上sudo，输入密码继续
```javascript
sudo npm install vue-cli -g
```
> 其它一些命令
```javascript
vue -V //版本
vue -h //帮助
vue list //官方模板
```
##### 02.安装vue-cli模版
> cd 到项目目录 如：cd /Users/mac/Desktop/vue
```javascript
vue init webpack
```

    Project name cli  //项目名称
    ? Project description A Vue.js project  //项目描述
    ? Author //作者
    ? Vue build standalone  //Vue独立构建
    ? Install vue-router? Yes //安装vue-router？
    ? Use ESLint to lint your code? No //使用ESLint来代替你的代码？
    ? Set up unit tests Yes //设置单元测试
    ? Pick a test runner jest //选择一个测试运行笑话
    ? Setup e2e tests with Nightwatch? Yes //使用Nightwatch设置e2e测试
    ? Should we run `npm install` for you after the project has been created? (recommended) npm //项目创建后，我们应该为您运行`npm install`吗？

##### 03.启动服务器
> cd项目目录
```javascript
npm run dev
```
##### 04.建立打包项目
> 项目下生成dist目录，即上线版本
```javascript
npm run build
```
##### 了解目录
vue-cli webpack目录  | 说明|
--------- | --------|
build  | 打包配置 |
config  | node环境配置 |
dist  | 打包好的文件 |
node_modules  | node依赖 |
src  | 开发目录 |
static  | 静态资源 |
test  | 测试 |
