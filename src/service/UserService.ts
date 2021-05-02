import { Injectable } from "@nestjs/common";
import { readFileSync } from "node:fs";
import { UserAlreadyExistError } from "src/domain/UserAlreadyExistError";
import { User } from "src/model/User";

@Injectable()
export class UserService {

    path: string = "src/documents/";

    createUser(user: User): User{
        //const fs = readFileSync(this.path + user.cpf + ".txt")
        //console.log(fs)
        // if(true){
        //     throw new UserAlreadyExistError("User Alread Exists");
        // }
        console.log(user);
        return user;
    }
}