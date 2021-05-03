import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport";
import { AuthService } from "src/service/AuthService";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {

    constructor(private authService: AuthService) {
        super();
    };

    authenticate(req: any) {
        return this.validate(req.username, req.password);
    }

    validate(username: string, password: string): any {
        const user = this.authService.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}