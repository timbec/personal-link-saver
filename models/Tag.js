const mongoose = require('mongoose'); 

const TagSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    link: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'links'
    }
}); 

module.exports = mongoose.model('tag', TagSchema); 