import React from 'react'
import PropTypes from 'prop-types'

const Html = props => (
    <html lang="en">
    <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=5.0"
        />
        <title>RESUME</title>
        <link href="./style/material.css" rel="stylesheet" title="Material Style"/>
        <link href="./style/resume.css" rel="stylesheet" title="Resume Style"/>
    </head>
    <body>
    <div id="root" dangerouslySetInnerHTML={{ __html: props.body }} />
    <script type="application/json" id="bootupData">{props.data}</script>
    <script src='./dist/bundle.js' />
    </body>
    </html>
)

Html.propTypes = {
    body: PropTypes.node,
}

Html.defaultProps = {
    body: '',
}

export default Html
