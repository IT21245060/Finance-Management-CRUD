const mongoose = require('mongoose');



const postSchema = new mongoose.Schema({

    billId:{
        type:String,
        required:true
    },
    vender:{
        type:String,
        required:true
    },
    invoiceDate:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
   
    },
  
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model('ShowRooms',postSchema);
