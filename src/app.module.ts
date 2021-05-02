import { Module } from '@nestjs/common';
import { UserController } from './controller/UserController';
import { UserService } from './service/UserService';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
