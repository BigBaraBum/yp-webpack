# yp-webpack
11 проектная работа 
v.0.1.1

https://bigbarabum.github.io/yp-webpack/

# Инструкция

- Клонируйте репозиторий командой
`git clone https://github.com/BigBaraBum/yp-webpack.git`
- Инициализируйте npm в папке с проектом командой
`npm init`
- Установите webpack и необходимые модули следующими командами:

	```npm i webpack --save-dev```

	```npm i webpack-cli --save-dev```
- Транспилятор JS:

```npm i babel-loader --save-dev```

```npm i @babel/cli --save-dev```

```npm i @babel/core --save-dev```

```npm i @babel/preset-env --save-dev```

```npm i core-js@3.4.1 --save```

```npm i --save babel-polyfill```
- Минификация и обработка CSS:

```npm i mini-css-extract-plugin --save-dev```

```npm i css-loader --save-dev```

```npm i postcss-loader --save-dev```

```npm i autoprefixer --save-dev```

```npm i cssnano --save-dev```
- HTML:

```npm install html-webpack-plugin --save-dev```-
- MD5:

```npm i webpack-md5-hash --save-dev```
- GH-Pages:

```npm install gh-pages --save-dev```



- Чтобы запустить сборку для разработки воспользуйтесь:
```npm run dev```
- Для финальной сборки:
```npm run build```
- -Что бы задеплоить сайт на gh-pages:
```npm run deploy```

