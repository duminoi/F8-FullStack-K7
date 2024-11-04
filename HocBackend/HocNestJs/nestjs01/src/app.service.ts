import { Injectable } from '@nestjs/common';

class CreateUserDto{
  id: number | null;
  name:string;
  age: number;
}

@Injectable()
export class AppService {
  public users:CreateUserDto[] = [
    {
      id:1,
      name: "minh",
      age: 22
    }
  ]

  getList(): CreateUserDto[]{
    return this.users;
  }

  getOne(id:number): CreateUserDto{
    return this.users.find(user=>user.id = Number(id));
  }

  create(user){
    user.id = 2
    this.users.push(user)
    return user
  }


  getello(): string {
    return 'Hello Minh!';
  }
}
