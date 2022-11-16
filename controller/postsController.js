const mongoose =require('mongoose')
const Post = require('../model/index')

const getAllPosts = async (req,res)=>{
    try {
        let posts = await Post.find()
        console.log(posts)
        return res.send({'posts':posts})
    } catch (error) {
        return res.status(404).send(error)
    }
}

const createPost = async(req,res)=>{
    try {
        let {userName,topic} = req.body
        console.log(userName,topic)
        try {
            let post = new Post({
                userName : userName,
                topic : topic
            })
            let savedPost = await post.save()
            return res.send({'post created': savedPost})
        } catch (error) {
            return res.status(404).send(error)
        }
    } catch (error) {
        return res.status(404).send(error)
    }
}

exports.getAllPosts = getAllPosts
exports.createPost = createPost