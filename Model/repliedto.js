const mongoose = require('mongoose');

const repliedToSchema = new mongoose.Schema({
    comment_id :{
        type: String,
        required: true
    }
},{collection:"repliedTo"});

module.exports = mongoose.model('repliedTo', repliedToSchema);