import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDTO } from 'src/dto/create-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('create')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
          type: 'object',
        required:['fullName','email','password','address','experienceYear','skills','profilePicture','phoneNo'],
          properties: {
              fullName: {
                  type: 'string' 
                  
              },
              email: {
                  type:'string',
              },
              address: {
              type:'string'
              },
              password: {
              type:'string'
              },
              phoneNo: {
              type:'string'
              },
              experienceYear: {
                  type: 'number'
                  
              },
              skills: {
                  type: 'array',
                  items: {
                      type:'string'
                  }
              },
              gender: {
                  type:'string'
              },
        profilePicture: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('profilePicture', { storage: memoryStorage ()}),
  )
  createUser(
    @Body() dto: createUserDTO,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.userService.createUser(dto, file);
  }
}


