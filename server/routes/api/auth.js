const router = require('express').Router(); 
const{ User } = require('../../models')
const bcrypt = require('bcrypt');

// Register New User
router.post('/register', async (req, res) => {
   try {
        // Generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
 
        // Create new user using the User model
        const newuser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    })
    
        // Save user and respond
        const user = await newuser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
    } 
})


// Login User
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email})
        !user && res.status(404).json("User not found")

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("Wrong password")    

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})
    

module.exports = router;