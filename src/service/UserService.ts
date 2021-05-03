import { Injectable } from "@nestjs/common";
import { readFileSync } from "fs";
import { readdirSync } from "fs";
import { writeFileSync } from "fs";
import { hashPasswordTransform } from "src/core/crypto";
import { UserAlreadyExistError } from "src/domain/UserAlreadyExistError";
import { User } from "src/model/User";

@Injectable()
export class UserService {

    path: string = "src/documents";

    createUser(user: User): User {
        let cpf = this.formatCpf(user.cpf);

        let rd = readdirSync(this.path);

        if (rd.indexOf(cpf + '.txt') >= 0) {
            throw new UserAlreadyExistError("User Alread Exists");
        }
        user.password = hashPasswordTransform.to(user.password);
        writeFileSync(this.path + '/' + cpf + '.txt', user.toString());
        return user;
    }

    private formatCpf(cpf: string): string {
        cpf = cpf.replace(/[^\d]/g, "");
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
}