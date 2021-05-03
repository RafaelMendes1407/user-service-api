import { Controller, Get, Post, Body } from "@nestjs/common";
import { UserService } from "src/service/UserService";
import { User } from "src/model/User";

@Controller('users')
export class UserController {

    constructor(private userService: UserService){
    };
    
    @Post()
    signin(@Body() user: User): User {
        return this.userService.createUser(user);
    }

    @Get()
    login() {
        return Response;
    }


}