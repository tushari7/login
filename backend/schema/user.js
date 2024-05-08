const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required :true,
        unique: true
    },
    
    phone: {
      type: Number,
      required: true,
    },

    email: {
        type : String,
        required :true,
        unique: true
    },
    password: {
        type : String,
        required :true
    },
    is_deleted: {
        type: Boolean,
        default: false
      },
      token: {
      type: String,
      },
})
const User = mongoose.model("User", userSchema);

module.exports = { User };