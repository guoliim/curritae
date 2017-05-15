const webpack = require('webpack');
const config = require('./webpack.config');
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const htmlElement = React.createElement(require('./compiled-html'));
let html = ReactDOMServer.renderToStaticMarkup(htmlElement);
html = `<!DOCTYPE html>\n${html}`;


webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.log('ERROR')
    }
    fs.writeFile('index.html', html, error => {
        if (error) {
            throw error
        }
        console.log("success");
    })
})