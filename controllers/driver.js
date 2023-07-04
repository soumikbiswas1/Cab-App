const Driver = require("../models/Driver");

exports.add=(async(req,res,next)=>{
    const{name,Id,email,phone}=req.body;
    const newDriver = new Driver(name,Id,email,phone);
    const existing_driver = await Driver.findOne({ email: req.body.email });
    if(existing_driver){
        return res.status(400).json({
            status: "error",
            message: "Email already in use, Please login.",
          });
    }else{
    try{
        const savedDriver = await newDriver.save();
        res.status(200).json(savedDriver)
    }catch(err){
        res.status(500).json(err)
    }}
    
})



exports.delete=(async (req,res)=>{
    try{
        await Driver.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");
    }catch(err){
        res.status(500).json(err)
    }
})

exports.update=(async (req,res)=>{
    try{
      const updatedDriver = await Driver.findByIdAndUpdate(req.params.id,
       { $set: req.body},
       {new:true})
      res.status(200).json(updatedDriver);
  }catch(err){
      res.status(500).json(err)
  }
})

