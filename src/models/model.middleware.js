export const states = (req, res, next)=>{
    if(req.session.email)
    next()
} 