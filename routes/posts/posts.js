const express = require('express')
const userAuth = require('../../middleware/userAuth')
const postsController = require('../../controller/postsController')
const router = express.Router()

router.get('/',userAuth.authorizer,(req,res)=>{
    postsController.getAllPosts(req,res)
})

router.post('/',(req,res)=>{
    postsController.createPost(req,res)
})

module.exports = router