const express=require('express');
const courseController=require('../app/controllers/CourseController');
const router=express.Router();



router.get('/create',courseController.create);
router.post('/store',courseController.store);
router.get('/:id/edit',courseController.get);
router.post('/handle-form-actions',courseController.handleFormActions);
//sửa
router.put('/:id',courseController.update);
router.patch('/:id/restore',courseController.restore);
//delete
router.delete('/:id',courseController.destroy);
//delete không thể khôi phục
router.delete('/:id/force',courseController.forceDestroy);
router.get('/:slug',courseController.show);


module.exports=router;