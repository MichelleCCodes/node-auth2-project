const jwt = require("jsonwebtoken")
const {jwtSecret} = require("../../config/secrets.js")

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if(!token){
    res.status(401).json("Please provide token")
  }else{
    jwt.verify(token,jwtSecret, (err,decoded)=>{
      if(err){
        res.status(401).json("The token is not good " + err.message)
      }else{
        req.decodedToken = decoded
        next()
      }
    })
  }
};
