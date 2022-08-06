const mongoose=require('mongoose');

const dataschema=new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mob:{
        type:Number ,
        required:true
    },
    sch:{
        type:Number,
        required:true
    },
    branch:{
        type:String,
        required:true
    }
});

const dataModel=mongoose.model('Entries', dataschema);
module.exports=dataModel;