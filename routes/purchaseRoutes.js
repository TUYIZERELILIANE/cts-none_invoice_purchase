const express = require("express");

const router = express.Router();

const Purchase = require("../models/Purchase");

router.post("/add",async(req,res)=>{

const purchase = new Purchase(req.body);

await purchase.save();

res.json(purchase);

});

router.get("/all",async(req,res)=>{

const purchases = await Purchase.find();

res.json(purchases);

});

router.put("/edit/:id",async(req,res)=>{

await Purchase.findByIdAndUpdate(req.params.id,req.body);

res.json({msg:"Updated"});

});

router.delete("/:id",async(req,res)=>{

await Purchase.findByIdAndDelete(req.params.id);

res.json({msg:"Deleted"});

});

module.exports = router;