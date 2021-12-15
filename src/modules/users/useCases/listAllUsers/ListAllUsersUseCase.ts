import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const findedUserAdmin = this.usersRepository.findById(user_id)

    if (findedUserAdmin.admin === false) {
      throw new Error("You aren't admin, can't execute this method")
    }

    if (!findedUserAdmin) {
      throw new Error("User not found")
    }

    const allUsers = this.usersRepository.list()

    return allUsers
  }
}

export { ListAllUsersUseCase };
