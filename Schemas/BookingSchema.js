const mongoose=require("mongoose");
const bookingSchema=mongoose.Schema({
    fromOrigin:String,
    destination:String,
    startDate:String,
    endDate:String,
});


module.exports=bookingSchema;