import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 'vinay-sandhu',
      name: 'Vinaypartap Singh',
      email: 'dummay@gmail.com',
      password: 'dummay@1234',
      role: 'ADMIN',
    },
    {
      id: 'john-doe',
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      role: 'ENGINEER',
    },
    {
      id: 'alice-smith',
      name: 'Alice Smith',
      email: 'alice.smith@example.com',
      password: 'alice@2023',
      role: 'INTERN',
    },
    {
      id: 'bob-jones',
      name: 'Bob Jones',
      email: 'bob.jones@example.com',
      password: 'bob@secret',
      role: 'ENGINEER',
    },
    {
      id: 'charlie-brown',
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      password: 'charlie123',
      role: 'ADMIN',
    },
    {
      id: 'emma-wilson',
      name: 'Emma Wilson',
      email: 'emma.wilson@example.com',
      password: 'emma@456',
      role: 'INTERN',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  create(user: {
    id: string;
    name: string;
    email: string;
    password: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    const newUser = {
      ...user,
    };

    this.users.push(newUser);

    return newUser;
  }

  updateUser(
    id: string,
    updatedUser: { name?: string; email: string; password?: string },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: string) {
    const removerdUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removerdUser;
  }
}
