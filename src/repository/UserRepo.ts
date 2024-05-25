import { User } from "../model/User";

interface IUserRepo {
    save(user: User): Promise<void>;
    findByEmail(email:string): Promise<User>;
  }

  export class UserRepo implements IUserRepo {
      async save(user: User): Promise<void> {
          try {
            await User.create({
                email:user.email,
                password:user.password
            })
          } catch (error) {
            throw new Error("Error al crear usuario");
          }
      }
      async findByEmail(email: string): Promise<User> {
        try {
           const user = await User.findOne({
                where:{email:email}
            })
            if(!user){
                throw new Error('Usuario no encontrado')
            }
            return user
          } catch (error) {
            throw new Error("Error al encontrar usuario");
          }
      }

  }