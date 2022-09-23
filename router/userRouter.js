const express=require("express");
const router=express.Router();
const userContImport=require('../controllers/userCont');
const multer = require("multer");


// img storage path
const imgconfig = multer.diskStorage({
   destination:(req,file,callback)=>{
       callback(null,"./uploads")
   },
   filename:(req,file,callback)=>{
       callback(null,`imgae-${Date.now()}. ${file.originalname}`)
   }
})


// img filter
const isImage = (req,file,callback)=>{
   if(file.mimetype.startsWith("image")){
       callback(null,true)
   }else{
       callback(new Error("only images is allowd"))
   }
}

const upload = multer({
   storage:imgconfig,
   fileFilter:isImage
});

router.post('/register',upload.single("photo"),userContImport.registerCont);

router.get('/getData',userContImport.getDataCont);

router.delete('/deleteData/:id',userContImport.deleteDataCont);


module.exports=router;
