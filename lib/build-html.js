import React from 'react'

class Html extends React.Component {
    render() {
        return (
            <html lang="en">
            <head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0 maximum-scale=5.0"
                />
                <title>RESUME</title>
                <link href="./styles.css" rel="stylesheet" title="Default Style"/>
            </head>
            <body>
            <div id="root"/>
            <script src="./bundle.js"/>
            </body>
            </html>
        );
    }
}

module.exports = Html;
