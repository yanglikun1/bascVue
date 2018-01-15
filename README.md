# bascvue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# bascVue

index.html
适配移动设备配置
```html
  <head>
    <meta charset="utf-8">
    <title>smarthomeh5</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <script>
      (function () {
        var baseFontSize = 100;
        var baseWidth = 375;
        var set = function () {
          var clientWidth = document.documentElement.clientWidth || window.innerWidth;
          var rem = 100;
          if (clientWidth != baseWidth) {
            rem = Math.floor(clientWidth / baseWidth * baseFontSize);
          }
          document.querySelector('html').style.fontSize = rem + 'px';
        }
        set();
        window.addEventListener('resize', set);
      }());
    </script>
    <style type="text/css">
      body{margin:0 auto;font-size: 14px; min-width:320px; background:#f0f0f0;font-size:14px;font-family:Helvetica,STHeiti STXihei, Microsoft YaHei, Arial;color:#333;-webkit-text-size-adjust:100% !important;-webkit-user-select:none;user-select:none;height: 100%;}
      a,button,input,i,div{-webkit-tap-highlight-color:rgba(0,0,0,0); -moz-tap-highlight-color:rgba(0,0,0,0); -ms-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:rgba(0,0,0,0); padding:0; margin:0; font-weight:normal;}
    </style>
  </head>
```
