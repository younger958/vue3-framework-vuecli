# vue3

## 安装node_modules
```
npm install
```

### 启动本地服务——测试接口
```
npm run serve
```
### 启动本地服务——正式接口
```
npm run serve:prod
```

### 打包——正式接口
```
npm run build
```

### 检测错误
```
npm run lint
```
### style的命名规则
```
请使用下划线式命名规则，例如：class="app_header" .app_header
```
### js的命名规则
```
请使用驼峰式命名规则，例如：const appHeader = {}
```
### .vue文件的命名规则
```
请使用首字母大写且驼峰式命名规则，例如：HomeView.vue
```
### 自动导入注意事项
```
自动导入需要将组件注册到根目录/src/components文件夹之下
在其他文件定义的.vue组件，不被自动导入收录，无法使用自动导入
```
### 技术栈
```
全局状态管理：pinia
通讯模块：axios
ui：elUI+
路由：vue-router
规范：ts
按需加载组件：（unplugin-auto-import|unplugin-auto-import）
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
