import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { UserController } from './controller/UserController';
import { ExceptionHandler } from './domain/ExceptionHandler';
import { UserService } from './service/UserService';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [UserController],
  providers: [
    { provide: APP_FILTER, useClass: ExceptionHandler },
    { provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor },
    UserService
  ],
})
export class AppModule { }
