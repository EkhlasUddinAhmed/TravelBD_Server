const express=require("express");
const travelRouter=express.Router();
const mongoose=require("mongoose");
const bookingSchema=require("../Schemas/BookingSchema");
const staySchema=require("../Schemas/StaySchema");
const travelModel=new mongoose.model("Travel",bookingSchema);
const stayModel=new mongoose.model('Stayroom',staySchema);

travelRouter.get("/bd",async (req, res)=>{
    try{
    
        const allBooking=await travelModel.find();
        console.log("All Bookings Are:",allBooking);
        
        res.status(200).send(allBooking);
     }catch(error){
      console.log("GEtting AllBooking server sided Error:",error.message);
      res.status(500).send({error:error.message});
     }
});

travelRouter.post("/bd",async(req, res)=>{
   try{
    
      const newBooking=new travelModel(req.body);
      const newBookingIs= await newBooking.save();
      
      res.status(200).send(newBookingIs);
   }catch(error){
    console.log("A New Booking server sided Error:",error.message);
    res.status(500).send({error:error.message});
   }
});


travelRouter.get("/stayroom/:areaCode",async (req, res)=>{
    try{
        const {areaCode}=req.params;
        console.log(areaCode);
        const allDataStayRoom=await stayModel.find({areaCode});
        console.log("All DataStayRoom :",allDataStayRoom);
        
        res.status(200).send(allDataStayRoom);
     }catch(error){
      console.log("GEtting allDataStayRoom server sided Error:",error.message);
      res.status(500).send({error:error.message});
     }
});

travelRouter.delete("/stayroom/delete",async(req, res)=>{
     try{
        const allDeletedData=await stayModel.deleteMany();
        console.log("All data Deleted SuccessFully"); 
        res.status(200).send(allDeletedData);
     }catch(error){
      console.log("Deleting Data Server Sided Error "); 
      res.status(200).send({error:error.message});
     }
})




module.exports=travelRouter;