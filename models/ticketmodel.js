const { Mongoose, default: mongoose } = require("mongoose");

var ticketSchema=new mongoose.Schema(
    {
        film:{
            type:String,Number,
            required:true
        },
        theatre:{
            type:String,
            required:true
        },
        time:{
            type:String,Number,
            required:true
        }
    }
)

var ticketModel=mongoose.model('tickets',ticketSchema)

module.exports={ticketModel}
