import { AppDataSource } from "../config/database";
import { User } from "../entities/user.entity";

export class UserService {
    private userRepository = AppDataSource.getRepository(User);

    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async createUser(name: string, email: string): Promise<User> {
        const user = this.userRepository.create({ name, email });
        return await this.userRepository.save(user);
    }
}
