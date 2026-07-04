import jwt from "jsonwebtoken";

function auth(req,res,next) {
    const authHeader = req.headers.authorization || "";
    const [scheme, tokenFromHeader] = authHeader.split(" ");

    const tokenFromCookie = req.cookies?.access_token;

    const token = 
            scheme === 'Bearer' && tokenFromHeader?
                tokenFromHeader:
                tokenFromCookie;

    if(!token) {
        return res.status(401).json({message:"Missing or invalid authorization header"});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {
            id: decoded.id,
            username: decoded.username,
            email:decoded.email
        };
        next();
    } catch(e) {
        if(e.name === "TokenExpiredError") {
            return res.status(401).json({message:"Token expired"});
        }
        return res.status(401).json({message:"Invalid token"});
    }
}

export default auth;