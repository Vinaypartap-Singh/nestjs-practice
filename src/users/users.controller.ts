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

@Controller('users')
export class UsersController {
  /*
    Get /users/:id
    Post /users
    patch /users/:id
    delete /users/:id
    */

  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return { id };
  }

  @Post()
  addUser(@Body() user: {}) {
    return user;
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return { id };
  }
}
