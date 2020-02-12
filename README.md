<h1 align="center">
    <img alt="LittleBee" title="Admin" src="https://github.com/yuxiang660/little-bee-admin/blob/master/.github/logo.jpg" width="140"> </br>
</h1>

<h4 align="center">
  “蜂监工”
</h4>
<h4 align="center">
  作者 -- “搬砖蜜蜂”
</h4>

# Demo

![Demo](https://github.com/yuxiang660/little-bee-admin/blob/master/.github/demo.gif)

# Introduction

- A `Ant Design Pro` based web app for RESTful server, which is protected by `Typescript` and `Jest`
- Refer to the [blog](https://yuxiang660.github.io/little-bee-client/posts/5/2020-02-10---Little-Bee-Admin-Intro/) for details.


# Project Structure

```js
.
├── README.md
├── build
|   └── dist                   // 存放Typescript编译输出
├── config                     // 存放用户配置
|   ├── config.ts              // 主配置文件，可定义菜单，路由，布局等
|   ├── defaultSettings.ts     // 默认配置，包括菜单样式，主题颜色等
|   ├── plugin.config.ts       // 项目插件配置
|   └── themePluginConfig.ts   // 可选主题
├── dist                       // 存放项目build输出
├── jest-puppeteer.config.js   // jest配置
├── jest.config.js             // jest配置
├── jsconfig.json              // 对Javascript文件的主配置
├── mock                       // 测试的mock文件
├── package.json               // 项目包管理文件
├── public                     // 静态资源存放目录，如icon，build后会被一起复制到/dist目录
├── src                        // 源文件
|   ├── assets                 // 静态资源存放目录，如logo，build后会被一起复制到/dist/static目录
|   ├── components             // React组件
|   ├── e2e                    // 集成测试用例
|   ├── global.less            // 框架文件，全局样式
|   ├── global.tsx             // 框架文件，和PWA相关
|   ├── layouts                // 通用布局
|   ├── locales                // 国际化资源
|   ├── manifest.json          // 框架文件，和PWA相关
|   ├── models                 // 全局 dva model
|   ├── pages                  // 页面入口，可在/config/config.ts中和路由绑定
|   ├── service-worker.js      // 框架文件
|   ├── services               // 后台接口服务
|   ├── typings.d.ts           // 对某些全局模块进行声明，服务于Typescript
|   └── utils                  // 工具库
├── tests                      // 测试配置脚本
└── tsconfig.json              // 对Typescript文件的主配置
```

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:9191](http://localhost:9191) to view it in the browser.<br />
The page will reload if you make edits.<br />

### `npm test`

Launches the tests.<br />

### `npm run build`

Builds the app for production to the `build/dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run analyze`

If your build file is large, you can optimize your code with the analyze command to build and analyze the volume distribution of dependent modules.<br />
The command will open analyze result in your default browser automatically.


