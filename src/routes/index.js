const newRouter = require('./news');
const siteRouter = require('./site');
const meRouter = require('./me');
const courseRouter = require('./courses');

function route(app) {
    app.use('/news',newRouter);
    app.use('/me',meRouter);
    app.use('/courses',courseRouter);
    app.use('/',siteRouter);

    // app.get('/', (req, res) => {
    //     res.render('home'); //Nếu không muốn lấy layout thì render false;
    //     //res.render('home',{layout: false});
    // });
}
module.exports = route;