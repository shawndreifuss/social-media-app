const router = require('express').Router(); 
const{ User } = require('../../models')
const bcrypt = require('bcrypt');


// Update User -- /users/:id
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json('Account has been updated');
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json('You can update your account only');
    }

});



// Delete User -- /users/:id
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete( {_id: req.params.id});
            return res.status(200).json('Account has been deleted');
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
       return res.status(401).json('You can delete your account only');
    }

});

// Get a User  -- /users/:id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {
            password,
            updatedAt,
            ...other
        } = user._doc;
        res.status(200).json(other);
        
    } catch (err) {
        res.status(500).json(err);
    }

});

// Follow a User
router.put('/:id/follow', async (req, res) => {
    if(req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId); 
            if (!user.followers.includes(req.body.userId)) {
                // push userid into followers arrey
                await user.updateOne({ $push: { followers: req.body.userId }});
                // push params id into followings arrey
                await currentUser.updateOne({ $push: { followings: req.params.id }});
                res.status(200).json('User has been followed');
            }else{
                res.status(403).json('You already follow this user');
            }

        }catch (err) {
            res.status(500).json(err);
        }

    }else {
        res.status(403).json('You can not follow yourself');
    }
});
//Unfollow a User

// Follow a User
router.put('/:id/unfollow', async (req, res) => {
    if(req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId); 
            if (user.followers.includes(req.body.userId)) {
                // pull userid from followers arrey
                await user.updateOne({ $pull: { followers: req.body.userId }});
                // pll params id from followings arrey
                await currentUser.updateOne({ $pull: { followings: req.params.id }});
                res.status(200).json('User has been unfollowed');
            }else{
                res.status(403).json('You already unfollowed this user');
            }

        }catch (err) {
            res.status(500).json(err);
        }

    }else {
        res.status(403).json('You can not follow yourself');
    }
});

module.exports = router;