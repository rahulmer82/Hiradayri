const product =require("../Moduels/Product")
const express=require('express');
const router=express.Router();

router.post('/add', async(req,res)=>{
    try {
        const {name,size,brand,price,discount,discription,img,img1,img2,img3}=req.body;
        const myproduct=new product({name,size,price,brand,discount,discription,img,img1,img2,img3});
        console.log(myproduct)
    
        const Product =await myproduct.save()
        res.json(Product)
        
    } catch (error) {
        console.error(error.message);
    res.status(500).send(error,"Internal error found")
    }
})

module.exports=router