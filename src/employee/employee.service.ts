import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
      data: createEmployeeDto,
    });
  }

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.databaseService.employee.findMany({
        where: {
          role,
        },
      });
    }

    return this.databaseService.employee.findMany();
  }

  findOne(id: string) {
    return this.databaseService.employee.findFirst({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where: {
        id: id,
      },
      data: updateEmployeeDto,
    });
  }

  delete(id: string) {
    return this.databaseService.employee.delete({
      where: {
        id: id,
      },
    });
  }
}
