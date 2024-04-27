const jwt = require("jsonwebtoken");
module.exports= (req,res,next)=>{
    const token = req.header('x-auth-token');
    if(!token){return res.status(404).json({ message:"Access Denied!!" });}
    var verify = jwt.verify(token,"secretKeyforCyber")
    if(verify.adminRole){
        next()
    }else{
        return res.status(404).json({ message:"Access Denied!!" });
    }
}