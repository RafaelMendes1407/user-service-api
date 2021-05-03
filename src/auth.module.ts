import { Module } from "@nestjs/common"
import { jwtConstants } from "./service/constant";
import { JwtModule } from "@nestjs/jwt"
import { AuthService } from "./service/AuthService";

@Module({
    imports: [
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '86400s' }
    }),],
    providers: [AuthService, LocalStrategy],
    exports: [JwtModule, AuthService]
})

export class AuthModule{}
