class NewsController{
    //[GET] /news
    news(req,res){
        res.render('news');
    }
    //[GET] /news/details
    details(req,res){
        res.send("detail");
    }
}
module.exports=new NewsController;