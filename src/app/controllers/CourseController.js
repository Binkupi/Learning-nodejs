const Course=require('../models/Course');
const {mongooseToObject}=require('../../util/mongoose');
class CourseController{
    //[GET] /courses/:slug
    show(req,res){

        Course.findOne({slug:req.params.slug})
        .then((course)=>{
            course=mongooseToObject(course);
            res.render('courses/show',{course});
        })
        .catch(error=>next(error));
    };
    create(req,res,next){

        res.render("courses/create");
    };
    //[POST] /courses/handle-form-actions
    handleFormActions(req,res,next){
        switch(req.body.action){
            case 'delete':
                Course.delete({ _id: {$in:req.body.courseIds} })
                .then(()=>res.redirect('back'))
                .catch(next);
                break;
            default:
                res.json({message:"action invalid"});
        }
    };
    //[Get] /courses/:id/get
    get(req,res,next){
        Course.findById(req.params.id)
        .then(course=>res.render('courses/edit',{
            course:mongooseToObject(course),
        }))
    };

    //[POST] /courses/store
    store(req,res,next){
       const formData=req.body;
        formData.image= `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course=new Course(formData);
        course.save()
        .then(()=>res.redirect('/me/stored/courses'))
        .catch((errol)=>{});
    };

    

    //[PUT ] /course/:id
    update(req,res,next){
        Course.updateOne({ _id: req.params.id }, req.body)
        .then(()=>res.redirect('/me/stored/courses'))
        .catch((errol)=>next(errol));
     };
     //[DELETE] /course:/id
     destroy(req,res,next){
        Course.delete({ _id: req.params.id })
        .then(()=>res.redirect('back'))
        .catch(next);
     };

    //[DELETE] /course:/id/force xóa không thể khôi phục
    forceDestroy(req,res,next){
        Course.deleteOne({ _id: req.params.id })
        .then(()=>res.redirect('back'))
        .catch(next);
        };

     //[PATCH] /course:/id/restore
     restore(req,res,next){
        Course.restore({ _id: req.params.id })
        .then(()=>res.redirect('back'))
        .catch(next);
     };
}

module.exports=new CourseController;