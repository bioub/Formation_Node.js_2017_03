
class Router {
    constructor() {
        this.routes = [];
    }

    addRoute(url, cb) {
        this.routes.push({
            url, cb
        });
    }

    dispatch(req, res) {
        let routeMatch = this.routes.find((route) => route.url === req.url);
        res.setHeader('Content-type', 'text/html; charset=UTF-8');

        if (!routeMatch) {
            res.statusCode = 404;
            return res.end('<h2>404 Not Found</h2>');
        }

        routeMatch.cb(req, res);
    }
}

module.exports = Router;