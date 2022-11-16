const jwt = require('jsonwebtoken')
require('dotenv').config()


const loginAuth = async (req,res)=>{
    let {email,password} = req.body
    try {
        let user = await User.find({email : email})
        if(user.length > 0){
            let userDetails = user[0]
        if(userDetails.password == password){
            let jwtToken = jwt.sign({email : email},process.env.jwtSecret)
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

const authorizer = (req,res,next)=>{
    try {
        let authToken = req.headers.authorization.split(' ')[1];
        if(authToken){
            let decoded = jwt.verify(authToken,process.env.jwtSecret)
            req.user = decoded
            return next()
            
        }else{
            res.status(401).send('un authorized')
        }
    } catch (error) {
        res.status(401).send('un authorized')
    }
}

exports.loginAuth = loginAuth
exports.authorizer = authorizer