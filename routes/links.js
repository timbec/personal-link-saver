const express = require('express'); 
const router = express.Router(); 
const auth = require('../middleware/auth'); 
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User'); 
const Link = require('../models/Link'); 
const Tag = require('../models/Tag'); 

// @route   GET    api/links
// @desc    Get logged in user's links
// @access Private
router.get('/', auth, async(req, res) => {
    try {
        const links = await Link.find({ user: req.user.id }).sort({
			date: -1
		});
        console.log(links);
        res.json(links);
    } catch(err) {
        console.error(err.message); 
        res.status(500).send('Server Error'); 
    }
}); 

// @route    POST api/links
// @desc     Create a link
// @access   Private
router.post(
	'/',
	[
		auth,
		[
            check('title', 'Title is required')
				.not()
				.isEmpty(),
			check('url', 'Url is required')
				.not()
				.isEmpty()
		]
	],
	async (req, res) => {
        const errors = validationResult(req);
        console.log(errors); 
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { title, url, category } = req.body;

		try {
			const newLink = new Link({
				title,
				url,
				category,
				user: req.user.id
			});

			const link = await newLink.save();
            console.log(link); 
			res.json(link);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

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