const express=require('express');
const sitesController=require('../app/controllers/SitesController');
const router=express.Router();

router.get('/',sitesController.home);
module.exports=router;