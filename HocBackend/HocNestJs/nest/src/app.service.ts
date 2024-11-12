import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {

  public users = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      email: 'john.doe@example.com'
    }
  ]

  getList() {
    return this.users;
  }

  getOne(id: number) {
    return this.users.find(user => user.id === Number(id))
  }

  create(user) {
    user.id = 2
    this.users.push(user)
    return user
  }
}
