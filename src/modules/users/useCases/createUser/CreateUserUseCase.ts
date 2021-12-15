import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const existedUser = this.usersRepository.findByEmail(email)

    if (existedUser) {
      throw new Error("Usuário já existente")
    }

    const createdUser = this.usersRepository.create({ email, name })

    return createdUser
  }
}

export { CreateUserUseCase };
