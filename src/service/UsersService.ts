import { Injectable } from '@nestjs/common';
import { hashPasswordTransform } from "src/core/crypto";
import { User } from 'src/model/User';

@Injectable()
export class UsersService {

    private users = [new User('admin', hashPasswordTransform.to('admin'))];


    findOne(username: string): User {
        return this.users.find(user => user.username === username);
    }

    register(user: User) {
        user.password = hashPasswordTransform.to(user.password);
        this.users.push(user);
        return;
    }
}
