const mongoose=require('mongoose');
const {Schema}=mongoose

const Product=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    size:{
        type:String,

    },
    price:{
        type:Number,

    },
    discription:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    img1:{
        type:String,
        required:true
    },
    img2:{
        type:String,
        required:false
        },
        img3:{
            type:String,
            required:false
        }
    
    
})
module.exports=mongoose.model("product",Product)