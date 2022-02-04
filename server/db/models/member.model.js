const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Member = new Schema(
    {
        _id: { type: String, required: true }, // walletAddress
        name: { type: String, required: true },
        role: { type: String, required: true },
        activity: { type: String, required: false },
        image: { type: String, required: false },
        groups: { type: [String], required: false } // working groups to be extended, can be another Schema 
    },
    { timestamps: true, _id: false },
)

module.exports = mongoose.model('member', Member)