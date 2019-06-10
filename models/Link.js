const mongoose = require('mongoose'); 

const LinkSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'users'
    }, 
    title: {
        type: String, 
        required: true
    }, 
    url: {
        type: String, 
        required: true
    }, 
    category: {
        type: String, 
        default: 'news'
    }, 
    tags: {
        name: String, 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'tags',
        required: false
    },
    date: {
        type: Date, 
        default: Date.now
    }
}); 

module.exports = mongoose.model('link', LinkSchema); 