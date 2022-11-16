const express = require('express')
const router = express.Router()
const controller = require('../../controller/login-signupcontroller')

router.post('/',(req,res)=>{
    controller.signup(req,res)
})

module.exports = router