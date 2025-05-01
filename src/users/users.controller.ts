import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all users',
    description: 'Retrieve a list of all users. You can filter by role.',
  })
  @ApiQuery({
    name: 'role',
    type: String,
    required: false,
    description: 'Filter users by role: INTERN, ENGINEER, ADMIN',
    example: 'INTERN',
  })
  @ApiResponse({ status: 200, description: 'Users fetched successfully' })
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.userService.findAll(role);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single user by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the user', example: '123' })
  @ApiResponse({ status: 200, description: 'User fetched successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'User created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  addUser(
    @Body(ValidationPipe)
    user: CreateUserDto,
  ) {
    return this.userService.create(user);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the user to update' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, description: 'User updated successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  updateUser(
    @Param('id') id: string,
    @Body(ValidationPipe)
    userUpdate: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, userUpdate);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the user to delete' })
  @ApiResponse({ status: 200, description: 'User deleted successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
