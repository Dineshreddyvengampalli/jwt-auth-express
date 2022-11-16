const jwt = require('jsonwebtoken')
require('dotenv').config()


const loginAuth = async (req,res)=>{
    let {email,password} = req.body
    try {
        let user = await User.find({email : email})
        if(user.length > 0){
            let userDetails = user[0]
            console.log(userDetails)
        if(userDetails.password == password){
            console.log(userDetails)
            let payload = {email : userDetails.email,name : userDetails.userName}
            let jwtToken = await jwt.sign(payload,process.env.jwtSecret, {expiresIn : '1h'})
            return res.send({"message" : "login sucess","token" : jwtToken})
        }else{
            return res.status(404).send('invalid cred')
        }
        }else{
            return res.status(404).send('invalid cred')

        }
    } catch (error) {
        return res.status(404).send(error)
    }

}

const authorizer = async(req,res,next)=>{
    try {
        let authToken = req.headers.authorization.split(' ')[1];
        if(authToken){
            let decoded = await  jwt.verify(authToken,process.env.jwtSecret)
            console.log(decoded)
            req.user = decoded

            return next()
            
        }else{
            res.status(401).send('un authorized')
        }
    } catch (error) {
        res.status(401).send(error)
    }
}

exports.loginAuth = loginAuth
exports.authorizer = authorizer