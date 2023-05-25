import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ProcessModule } from './process/process.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://jessepaula:ux0jgjM6zy0VsIg6@utiprocessual.fpm6ny7.mongodb.net/?retryWrites=true&w=majority'), ProcessModule, AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
