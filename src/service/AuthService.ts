import { Injectable } from "@nestjs/common";
import { UserService } from "./UserService";
import { JwtService } from "@nestjs/jwt"
import * as bcrypt from "bcrypt";


@Injectable()
export class AuthService{

    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ){}
    
    async validateUser(email: string, senha: string): Promisse<any> {
        const user = await this.userService.login(email);
        if(user && bcrypt.compareSync(senha, user.password)){
            const { password, ...result} = user;
            return result;
        }
    }

    async login
}