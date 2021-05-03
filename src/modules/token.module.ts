import { forwardRef, Module } from "@nestjs/common";
import { TokenController } from "src/controller/TokenController";
import { TokenService } from "src/service/TokenService";
import { AuthModule } from "./auth.module";
import { UsersModule } from "./users.module";


@Module({
    imports: [forwardRef(() => AuthModule), UsersModule],
    controllers: [TokenController],
    providers: [
      TokenService,
    ],
    exports: [TokenService]
  })
  export class TokenModule {}