import { Controller, Post, Body } from '@nestjs/common';
import { User } from 'src/model/User';
import { AuthService } from 'src/service/AuthService';
import { UsersService } from 'src/service/UsersService';

@Controller()
export class AuthController {

    constructor(
        private authService: AuthService,
        private usersService: UsersService) { }

    @Post('auth/login')
    login(@Body() user: User) {
        return this.authService.login(user)
    }

    @Post('auth/register')
    register(@Body() user: User) {
        return this.usersService.register(user);
    }
}