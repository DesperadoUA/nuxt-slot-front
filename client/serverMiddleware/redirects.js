const redirects = [
    { from: '/casino', to: '/' },
    { from: '/payments', to: '/' },
    { from: '/vendors', to: '/' },
]

module.exports = function (req, res, next) {
    const host = req.headers.host;
    const fullUrl = req.url;
    let url = req.url.split('?')[0];
    let urlParams = null;
    if (req.url.includes("?")) {
        urlParams = '?' + req.url.split('?')[1]
    }
    if(host.startsWith('www.')) {
        const to = 'https://' +  host.replace( 'www.', '') + req.url
        res.writeHead(301, {
            Location: to
        });
        res.end()
    }
    const redirect = redirects.find(r => r.from === url)
    if (redirect) {
        let newLocation;
        if (urlParams) {
            newLocation = redirect.to + urlParams;
        } else {
            newLocation = redirect.to;
        }
        res.writeHead(301, {
            Location: newLocation
        });
        res.end()
    } else {
        next()
    }

}