import { Controller, Post, Body } from '@nestjs/common';
import { User } from 'src/model/User';
import { AuthService } from 'src/service/AuthService';

@Controller()
export class AuthController {
    
    constructor(private authService: AuthService){}

    @Post('auth/login')
    login(@Body() user: User) {
        return this.authService.login(user)
    }
}