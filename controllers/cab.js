const Cab = require("../models/cab");

exports.add=(async(req,res)=>{
    const{registration,model,color}=req.body;
    const newCab = new Cab(registration,model,color);
    const existing_Cab = await User.findOne({ registration: req.body.registration });
    if(existing_Cab){
        return res.status(400).json({
            status: "error",
            message: "Cab already exists",
          });
    }else{
    try{
        const savedCab = await newCab.save();
        res.status(200).json(savedCab)
    }catch(err){
        res.status(500).json(err)
    }}
    
})

exports.delete=(async (req,res)=>{
    try{
        await Cab.findByIdAndDelete(req.params.id);
        res.status(200).json("Cab has been deleted");
    }catch(err){
        res.status(500).json(err)
    }
})

exports.update=(async (req,res)=>{
    try{
      const updatedCab = await Cab.findByIdAndUpdate(req.params.id,
       { $set: req.body},
       {new:true})
      res.status(200).json(updatedCab);
  }catch(err){
      res.status(500).json(err)
  }
})

exports.updateCab=(async(req,res)=>{
    const existing_user = await User.findOne( req.params._id );
    const existing_driver= await Driver.findOne({ cab:req.body.cab });
    if(existing_driver){
        res.status(200).send("Cab already in Use");
    }else{
        await User.findOneAndUpdate({ cab:Cab })
    }
})