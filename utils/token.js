import jwt from "jsonwebtoken";

const genarateToken =  (id,  role) => {
    try {
        
        var token = jwt.sign({ id: id, role: role || "user" }, process.env.JWT_SECRET_KEY);
        return token;

    } catch (error) {
        console.log(error);
    }
}


export default genarateToken;