const htmlCreate = ({style = "", html = "", data = "", bundleURL = ""}) => {
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
        <link href=${style} rel="stylesheet" title="Default Style" defer/>
    </head>
    <body>
    <div id="root">${html}</div>
    <script type="application/json" id="bootupData">${data}</script>
    <script src=${bundleURL}></script>
    <script>
        // Check for browser support of service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('service-worker.js')
               .then(function(registration) {
                    // Successful registration
                   console.log('Hooray. Registration successful, scope is:', registration.scope);
               }).catch(function(err) {
                  // Failed registration, service worker won’t be installed
                   console.log('Whoops. Service worker registration failed, error:', error);
               });
        }
    </script>
    </body>
    </html>
    `
}

export default htmlCreate
