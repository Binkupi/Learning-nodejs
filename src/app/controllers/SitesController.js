const Course=require('../models/Course');
const {mutipleMongooseToObject}=require('../../util/mongoose');
class SitesController{
    home(req,res){

       Course.find({},function(err,courses){
         //call back function  
        // if(!err){
        //     res.json(courses);
        //    } 
        //    else{
        //        res.status(400).json({error:'ERROR!!!'});
        //    }
        // res.render('home');

        //promise function
         Course.find({})
         .then(courses=>{
           courses=mutipleMongooseToObject(courses);
            res.render('home',{courses:courses});
         })
         .catch(error=>next(error));
    });
};
}
module.exports=new SitesController;