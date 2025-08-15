import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, Length } from "class-validator";
import { gender } from "src/Models/user.schema";

 

export class createUserDTO {
  @ApiProperty({ example: 'Hari Yadav' })
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty({ example: 'hari@mail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Hari@123' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'Kathmandu Nepal' })
  @IsString()
  address: string;

  @ApiProperty({ example: 9812345678 })
  @IsPhoneNumber('NP')
  phoneNo: string;

  @ApiProperty({ example: ['carpenter', 'plumber'] })
  @IsArray()
  skills: string[];

  @ApiProperty({ example: 3 })
  @IsNumber()
  experienceYear: number;

  @ApiProperty({ example: 'https://example.com/profile.jpg' })
  @IsString()
  profilePicture: string;

  @ApiProperty({ enum: gender, example: gender.male })
  @IsEnum(gender)
  gender: string;
} 