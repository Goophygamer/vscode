const mongoose= require('mongoose')
const logsSchema=mongoose.Schema({
    text:{
        type:String
    }
},{
    timestamps:true,
}
)
module.exports = mongoose.model('Logs',logsSchema)