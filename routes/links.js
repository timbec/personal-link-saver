const express = require('express'); 
const router = express.Router(); 

// @route   GET    api/links
// @desc    Get logged in user's links
// @access Private
router.get('/', (req, res) => {
    res.send('Get all contacts'); 
}); 

// @route   POST   api/links
// @desc    Auth user & get token
// @access  Private
router.post('/', (req, res) => {
    res.send('Add Contact'); 
}); 

// @route   PUT   api/linkss/:id
// @desc    Update link
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update Contact'); 
}); 

// @route   DELETE   api/contacts/:id
// @desc    Delete link
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete Link'); 
}); 


module.exports = router; 