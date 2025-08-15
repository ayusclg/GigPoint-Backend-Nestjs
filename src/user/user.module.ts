import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from 'src/Models/user.schema';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
    CloudinaryModule
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
