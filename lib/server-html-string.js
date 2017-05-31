const htmlCreate = ({material = "", resume = "", style = "", html = "", data = "", bundleURL = ""}) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=5.0"
        />
        <title>RESUME</title>
        <link href=${material} rel="stylesheet" title="Material Style"/>
        <link href=${resume} rel="stylesheet" title="Resume Style"/>
        <link href=${style} rel="stylesheet" title="Default Style"/>
    </head>
    <body>
    <div id="root">${html}</div>
    <script type="application/json" id="bootupData">${data}</script>
    <script src=${bundleURL}></script>
    </body>
    </html>
    `
}

export default htmlCreate
