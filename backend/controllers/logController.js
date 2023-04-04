const asyncHandler = require('express-async-handler')
const Logs = require('../model/logsModel')

const getLogs =asyncHandler(async (res)=>{
    const logs = await Logs.find()
    res.json({logs})
})

const setLogs = asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text filed ')
    }
    const logs = await Logs.create({
        text:req.body.text
    })
    res.json(logs)
})

const updateLogs =asyncHandler( async (req,res)=>{
   const logs = await Logs.findById(req.params.id)
   if(!logs){
    res.status(400)
    throw new Error('no such log found ')
   }
   const updatedLog= await Logs.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
})
    res.json(updatedLog)
})

const deleteLogs = asyncHandler(async (req,res)=>{
    const logs = await Logs.findById(req.params.id)
    if(!logs){
     res.status(800)
     throw new Error('no such log found ')
    }
    await logs.deleteOne()

    res.json({id:req.params.id})
})

module.exports = {
    getLogs,setLogs,updateLogs,deleteLogs,
}