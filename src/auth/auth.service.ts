import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UpdateUserDto } from "src/users/dto/update-user.dto";
import { User } from "src/users/entities/user.entity";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
  ) {}

  async register(dto: CreateUserDto): Promise<void> {
    await this.usersService.create(dto);
  }

  async me(user: User): Promise<User> {
    return this.usersService.findOne({
      id: user.id,
    });
  }

  async update(user: User, userDto: UpdateUserDto): Promise<User> {
    await this.usersService.update(user.uid, userDto);

    return this.usersService.findOne({
      id: user.id,
    });
  }
}