import { User } from "../model/User"
import { UserRepo } from "../repository/UserRepo"
import Auth from "../utils/Auth"

interface LoginResponse {
    token:string,
    id:number,
    email:string
}
interface IAuthService {
    login(email:string,password:string) : Promise<LoginResponse | string>
}

export class AuthService implements IAuthService {
    async login(email: string, password: string): Promise<LoginResponse | string> {
       const user = await new UserRepo().findByEmail(email)

       if(!user){
        throw new Error("Error peticion")
       }
       let compare = await Auth.passwordCompare(password,user.password)

       if(compare){
        return {token:Auth.generateToken(user.id,user.email),id:user.id,email:user.email}
       }

       return ""
    }
    async register(
        email: string,
        password: string,
      
      ): Promise<void> {
        try {
          const hashedPassword: string = await Auth.passwordHash(
            password
          );
          const newUser = new User();
          newUser.email = email;
          newUser.password = hashedPassword;
      
          await new UserRepo().save(newUser);
        } catch (error) {
          throw new Error("Error login!");
        }
      }

}