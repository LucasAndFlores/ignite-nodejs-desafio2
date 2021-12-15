import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const existingUser = this.usersRepository.findById(user_id)

    if (!existingUser) {
      throw new Error("This user non existing")
    }

    const adminUser = this.usersRepository.turnAdmin(existingUser)

    return adminUser
  }
}

export { TurnUserAdminUseCase };
