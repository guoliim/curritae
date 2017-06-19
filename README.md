
# Curritae

[![Codecov][codecov-image]][codecov-url] [![Build Status][travis-image]][travis-url] [![codebeat badge][codebeat-image]][codebeat-url]

A starter kit for resume generator boilerplate && framework, based on:

+ ES6 everywhere (with some bits of ES7, e.g. async await)
+ React.js (for the frontend)
+ Node.js, Koa.js (for the server-side)
+ Material Design Lite (for css style)
+ Webpack2 (for bundle)
+ Flow (for static type check)
+ Jest (for test)

Feature:

+ Html rendering, building static files
+ Babel compile （flow, es2015, react）for both client and server code
+ Node.js server-side built on top of Koa.js for async code
+ ReactDomServer (using react-dom) for server-side rendering
+ server-side logging (for develop mode)
+ Frontend app build with React
+ Hot Module Replacement (using webpack) for easier development
+ PostCSS postprocessor
+ Build with webpack, including development (develop mode) and production target (build mode)
+ Configuration by fetch api
+ United test build, running unit and functional tests, powered by `Jest`

The resume generator contains a sample app with a theme, configuration, development mode, building mode

## Install

Requirements:

+ Node.js V7.XXX

```bash
    $git clone https://github.com/guoliim/curritae
```

## Usage

First

```bash
    $cd curritae
```

Compile mode

```bash
    $npm run compile
```

Develop mode in root directory with **Hot Reload React Component** by webpack, devMiddleware, hotMiddleware

```bash
    $npm run develop
```

Building mode (production target) in root directory, output **static files** in public/

```bash
    $npm run build
```

## Configuration (resume api)

In lib/api/config.json config you resume items

+ **Caution** Do not remove the item in config

## Issues

+ **Koa2 packed by webpack2** have problem which can not work in node.js
+ using babel for bundling react component and public assets into one bundle.js just like webpack
+ react `this.props.item` in tag `<script>{props.item}</script>` has character escaping problem

## Todo
- [ ] CSS VARS/REFACTORING, styled-components/reactjs
- [ ] UI Refactoring/higher-order component
- [ ] organizing component states by Redux
- [ ] **improve routes in frontend**
- [ ] **STILL DO PWA**
- [ ] Add Getting Started
- [ ] dynamic config api
- [ ] theme wrapper
- [ ] add eslint

## LICENSE

This project is under the MIT license. See the [LICENSE](./LISENCE) file for the full license text

[codecov-image]: https://img.shields.io/codecov/c/github/guoliim/curritae.svg
[codecov-url]: https://codecov.io/gh/guoliim/curritae
[travis-image]: https://travis-ci.org/guoliim/curritae.svg?branch=master
[travis-url]: https://travis-ci.org/guoliim/curritae
[codebeat-image]: https://codebeat.co/badges/a604c793-4925-483d-b6d5-cb441de90fcb
[codebeat-url]: https://codebeat.co/projects/github-com-guoliim-curritae-master



