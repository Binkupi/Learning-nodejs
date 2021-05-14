const newsRouter=require('./news');
const searchRouter=require('./search');
const meRouter=require('./me');

const homeRouter=require('./home');
const coursesRouter=require('./courses');

function route(app){
    // app.get('/', (req, res) => {
    //     res.render('home');
    //   })

    app.use('/news',newsRouter);
    app.use('/search',searchRouter);
    app.use('/',homeRouter);
    app.use('/courses',coursesRouter);
    app.use('/me',meRouter);

}
module.exports=route;