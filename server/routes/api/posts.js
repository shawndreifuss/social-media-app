const router = require('express').Router();
const { Post, User } = require('../../models'); 

// Create a post
router.post('/' , async(req, res) => {
    const newPost =  new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    
    }catch(err){
        res.status(500).json(err);
    }
})



// Update a post api/posts/:id
router.put('/:id' , async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set: req.body});
            res.status(200).json('The post has been updated');
        }else{
            res.status(403).json('You can update only your post');
        }
    }catch(err){
        res.status(500).json(err);
    }
})
// Delete a post  api/posts/:id
router.delete('/:id' , async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json('The post has been deleted');
        }else{
            res.status(403).json('You can only delete your post');
        }
    }catch(err){
        res.status(500).json(err);
    }
})    
// Like/Dislike a post api/posts/:id/like
router.put('/:id/like' , async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}});
            res.status(200).json('The post has been liked');
        }else{
            await post.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).json('The post has been disliked');
        }
    }catch(err){
        res.status(500).json(err);
    }
})
// Get a post
router.get('/:id' , async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
})
// Get timeline posts
router.get('/timeline/all' , async(req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        // mapping all data from userPosts to postArray 
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({userId: friendId});
            })
        );
        res.status(200).json(userPosts.concat(...friendPosts));
    }catch(err){
        res.status(500).json(err);
    }
})



module.exports = router;