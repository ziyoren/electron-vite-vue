# electron-vite-vue

![GitHub Repo stars](https://img.shields.io/github/stars/ziyoren/electron-vite-vue)
[![vue](https://img.shields.io/badge/vue-3.2.31-brightgreen.svg)](https://github.com/vuejs/vue-next)
[![vite](https://img.shields.io/badge/vite-2.8.6-brightgreen.svg)](https://github.com/vitejs/vite)
[![electron](https://img.shields.io/badge/electron-17.2.0-brightgreen.svg)](https://github.com/electron/electron)
[![electron-builder](https://img.shields.io/badge/electronBuilder-22.14.13-brightgreen.svg)](https://github.com/electron-userland/electron-builder)




一个简单、高效的桌面应用开发样板工程，由Electron、Vite、Vue3等组成。集成了vue devtools调试工具，方便大家开发调试。

## Quick Start
克隆本项目
```sh
git clone git@github.com:ziyoren/electron-vite-vue.git
```

进入项目目录
```sh
cd electron-vite-vue
```

安装依赖
```sh
npm install
```

开始开发
```sh 
npm start
```

打包发布
```sh
npm run release
```

## Directory
```sh
├── README.md
├── build
│   └── icons
│       ├── 256x256.png
│       ├── icon.icns
│       └── icon.ico
├── electron
│   ├── index.js              #electron的入口文件
│   └── preload.js
├── electron-builder.json     #打包组件electron-builder的配置文件
├── extension                 #Chrome扩展程序目录 需要什么扩展下载放到这里
│   └── vue-devtools          #集成Vue-devtools6.1.3 方便您调试Vue项目
├── index.html                #Vue的入口模板文件
├── package.json
├── public                    #Vue3的静态资源文件夹
│   └── favicon.ico
├── src                       #Vue的代码目录，就在这里写前端界面
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   └── main.js
├── vite.config.js            #Vite的配置文件
├── dist                      #编译Vue时生成的目录
└── release                   #打包发布的应用在这个目录里

```


## 国内镜像配置

国内访问请配置镜像地址，否则可能会下载失败

1. 打开npm配置文件
```sh
npm config edit
```

2. 在空白处添加下面配置内容
```sh
electron_builder_binaries_mirror=https://npmmirror.com/mirrors/electron-builder-binaries/
electron_custom_dir={{ version }}
electron_mirror=https://cdn.npmmirror.com/binaries/electron/v
registry=https://registry.npmmirror.com/
```

3. 安装依赖
```sh
npm install
```

## Link

[Electron官网](https://www.electronjs.org/)

[Vue官网](https://staging-cn.vuejs.org/)

[ViteJS官网](https://vitejs.cn/)

[npmmirror.com中国镜像站](https://npmmirror.com/)
