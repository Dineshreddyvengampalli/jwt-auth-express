const express = require('express')
const controller = require('../../controller/login-signupcontroller')
const router = express.Router()

router.post('/',(req,res)=>{
    controller.login(req,res)
})

module.exports = router