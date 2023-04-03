const asyncHandler = require('express-async-handler')

const getLogs =asyncHandler(async (req,res)=>{
    res.json({message:'get logs '})
})

const setLogs = asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text filed ')
    }
    res.json({message:'set logs '})
})

const updateLogs =asyncHandler( async (req,res)=>{
    res.json({message:'updaet logs '})
})

const deleteLogs = asyncHandler(async (req,res)=>{
    res.json({message:'delete logs '})
})

module.exports = {
    getLogs,setLogs,updateLogs,deleteLogs
}