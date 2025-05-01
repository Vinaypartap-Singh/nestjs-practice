import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Prisma } from '@prisma/client';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Employees')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new employee' })
  // @ApiBody({ type: Prisma.EmployeeCreateInput })
  @ApiResponse({ status: 201, description: 'Employee created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid employee data' })
  create(@Body(ValidationPipe) createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all employees',
    description: 'Retrieve a list of all employees. Optionally filter by role.',
  })
  @ApiQuery({
    name: 'role',
    type: String,
    required: false,
    description: 'Filter employees by role: INTERN, ENGINEER, ADMIN',
    example: 'ENGINEER',
  })
  @ApiResponse({ status: 200, description: 'Employees fetched successfully' })
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.employeeService.findAll(role);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an employee by ID' })
  @ApiParam({
    name: 'id',
    description: 'The ID of the employee',
    example: 'abc123',
  })
  @ApiResponse({ status: 200, description: 'Employee fetched successfully' })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an employee by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the employee to update' })
  // @ApiBody({ type: Prisma.EmployeeUpdateInput })
  @ApiResponse({ status: 200, description: 'Employee updated successfully' })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateEmployeeDto: Prisma.EmployeeUpdateInput,
  ) {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an employee by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the employee to delete' })
  @ApiResponse({ status: 200, description: 'Employee deleted successfully' })
  @ApiResponse({ status: 404, description: 'Employee not found' })
  remove(@Param('id') id: string) {
    return this.employeeService.delete(id);
  }
}
