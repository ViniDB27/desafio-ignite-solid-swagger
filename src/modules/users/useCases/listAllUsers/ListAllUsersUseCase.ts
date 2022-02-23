import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userIsAmind = this.usersRepository.findById(user_id);

    if (!userIsAmind || !userIsAmind.admin) throw new Error("Forbirden");

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
