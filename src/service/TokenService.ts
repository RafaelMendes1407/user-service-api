import { Injectable, Inject, HttpException, HttpStatus, forwardRef } from '@nestjs/common';
import { Token } from 'src/model/Token';
import { AuthService } from 'src/service/AuthService';
import { UsersService } from './UsersService';
import { User } from 'src/model/User';

@Injectable()
export class TokenService {

    private tokenRepository = [];

    constructor(
        private usersService: UsersService,
        @Inject(forwardRef(() => AuthService))
        private authService: AuthService
    ) { }

    save(hash: string, username: string) {
        let objToken = this.tokenRepository.find(token => token.username === username)
        if (objToken) {
            this.tokenRepository.push(objToken.id, {
                hash: hash
            })
        } else {
            this.tokenRepository.push({
                hash: hash,
                username: username
            })
        }
    }

    refreshToken(oldToken: string) {
        let objToken = this.tokenRepository.find(token => token.hash === oldToken)
        if (objToken) {
            let usuario = this.usersService.findOne(objToken.username)
            return this.authService.login(usuario)
        } else { //é uma requisição inválida
            return new HttpException({
                errorMessage: 'Token inválido'
            }, HttpStatus.UNAUTHORIZED)
        }
    }

    getUserByToken(token: string): User {
        token = token.replace("Bearer ", "").trim()
        let objToken: Token = this.tokenRepository.find(token => token.hash === token)
        if (objToken) {
            let usuario = this.usersService.findOne(objToken.username)
            return usuario
        } else {
            return null
        }
    }
}