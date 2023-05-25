const mongoose=require("mongoose");
const staySchema=mongoose.Schema({
    // Schema Startring Here...

    areaCode:String,
    title:String,
    room:{
            roomNo:String,
            head:String,
             des:{
                one:String,
                two:String,
                three:String
             },
             rating:String,
             price:String,
             total:String,
             img:String
            }
    // Schema End Here...


});


module.exports=staySchema;