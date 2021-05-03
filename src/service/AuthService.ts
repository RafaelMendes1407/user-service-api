import { Injectable } from '@nestjs/common';
import { UsersService } from './UsersService';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';
import { TokenService } from './TokenService';
import { User } from 'src/model/User';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService,
        private jwtService: JwtService,
        private tokenService: TokenService
    ) { }

    validateUser(username: string, pass: string): any {
        const user = this.usersService.findOne(username);
        if (user && bcrypt.compareSync(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    login(user: User) {
        const payload = { username: user.username };
        const token = this.jwtService.sign(payload)
        this.tokenService.save(token, user.username)
        return {
            access_token: token
        };
    }

    loginToken(token: string) {
        let user: User = this.tokenService.getUserByToken(token)
        if (user) {
            return this.login(user)
        } else {
            return new HttpException({
                errorMessage: 'Token inválido'
            }, HttpStatus.UNAUTHORIZED)
        }
    }
}