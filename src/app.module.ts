import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { DocumentController } from './controller/DocumentController';
import { AuthController } from './controller/AuthController'
import { ExceptionHandler } from './domain/ExceptionHandler';
import { DocumentService } from './service/DocumentService';
import { AuthModule } from './modules/auth.module';
import { UsersModule } from './modules/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [DocumentController, AuthController],
  providers: [
    { provide: APP_FILTER, useClass: ExceptionHandler },
    { provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor },
    DocumentService
  ],
})
export class AppModule { }
