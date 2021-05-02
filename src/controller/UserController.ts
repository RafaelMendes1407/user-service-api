import { Controller, Delete, Get, Put, Post, Body } from "@nestjs/common";
import { UserService } from "src/service/UserService";
import { User } from "src/model/User";


@Controller('users')
export class UserController {

    constructor(private userService: UserService){
    };
    
    @Post()
    signin(@Body() user: User) {
        this.userService.createUser(user);
        return;
    }

    @Get()
    login() {
        return Response;
    }

    @Get()
    getUserDocumentation() {
        return Response;
    }

    @Put()
    updateDocumentation() {
        return Response;
    }

    @Delete()
    deleteDocumentation() {

    }

}