import { Body, Controller, Put } from "@nestjs/common";
import { RefreshTokenDto } from "src/model/RefreshTokenDto";
import { TokenService } from "src/service/TokenService";

@Controller('token')
export class TokenController{
    constructor(
        private tokenService: TokenService
    ){}

    @Put('refresh')
    async refreshToken(@Body() data: RefreshTokenDto){
        return this.tokenService.refreshToken(data.oldToken)
    }
}