import { Module } from '@nestjs/common';
import { UsersService } from '../service/UsersService';


@Module({
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
