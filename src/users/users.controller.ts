import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  /*
    Get /users/:id
    Post /users
    patch /users/:id
    delete /users/:id
    */

  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.userService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  addUser(
    @Body()
    user: {
      id: string;
      name: string;
      email: string;
      password: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.userService.create(user);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      id: string;
      name: string;
      email: string;
      password: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.userService.updateUser(id, userUpdate);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
