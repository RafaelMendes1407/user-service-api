import { Module } from "@nestjs/common"
import { jwtConstants } from "../service/auth/constant";
import { JwtModule } from "@nestjs/jwt"
import { AuthService } from "../service/AuthService";
import { UsersModule } from "./users.module";
import { LocalStrategy } from "../service/auth/LocalStrategy";
import { JwtStrategy } from "src/domain/auth/jwt.strategy";
import { PassportModule } from "@nestjs/passport";
import { TokenModule } from "./token.module";
import { AuthController } from "src/controller/AuthController";

@Module({
    imports: [ UsersModule, PassportModule, TokenModule,
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '86400s' }
    }),],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [JwtModule, AuthService]
})

export class AuthModule{}
