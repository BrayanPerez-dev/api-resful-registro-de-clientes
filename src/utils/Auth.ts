import bcrypt  from "bcrypt"
import jwt  from "jsonwebtoken"

interface Payload{
    userId: number;
    email:string;
}

class Auth {
    public static passwordHash = (password:string): Promise<string> => {
        return bcrypt.hash(password,10)
    }

    public static async passwordCompare (text:string,encryptedText:string) :Promise<boolean> {
        return await bcrypt.compare(text,encryptedText)
    }

    public static generateToken(id:number,email:string):string{
        const secretKey:string = process.env.JWT_SECRET_KEY || "my_secret"
        const payload: Payload = {userId:id,email:email}
        const option = {expiresIn:process.env.JWT_EXPIRES_IN}

        return jwt.sign(payload,secretKey,option)
    }

    public static validateToken(token:string):Payload | null {
        try {
            const secretKey:string = process.env.JWT_SECRET_KEY || "my_secret"
            return jwt.verify(token,secretKey) as Payload
        } catch (error) {
            return null
        }
    }
}

export default Auth