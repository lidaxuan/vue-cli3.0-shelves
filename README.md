# test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

![效果图](https://github.com/caoyu48/vue-g6-editor/blob/master/1.gif)
# vue-g6-editor

demo地址：http://62.234.69.136/
G6文档   https://www.yuque.com/antv/g6



## 开发规范

### 命名篇

1. #### 基本原则
    - 除纯小写单词“xxx”外仅允许使用Pascal，Camel，“xxx-xxx”，“_*”四种命名方式
    - vue文件、vue name和类应以名词形式命名，使用 ***Pascal*** 命名
      > ***BindingAccount*** × not good <br/>
        ***AccountBinder*** √ good
    - 文件、目录、路由、html class应以名词形式命名，使用 ***“xxx-xxx”*** 命名
      > 如 ***“babel-loader”***、
      ***“element-ui.css”***、***“/develop/api-builder”***、***“class="page-header"”*** ......
    - Function、变量、成员变量、Hook（id etc.）使用 ***Camel*** 命名, Function使用 动词+名词 短语形式。
      > 如 ***“isAdmin”***、***“hasPemission”***、***“getList”***

    - 无独立完整功能、无法独立运行的[子组件/文件]和内部(私有)成员变量的命名, 除按照其他规范外，可在名称前面添加“_”
      > 如 ***“_SubMenuHelper”***、***“_data”***、***“_operator.js”***

2. #### 详细规则
    - xxxxxxxx

### 其他参考
  https://www.w3cschool.cn/webdevelopment/l4yg7ozt.html

