import {ForbiddenException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { createUserDTO } from 'src/dto/create-user.dto';
import { Iuser } from 'src/Models/user.schema';
import bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private userModel: Model<Iuser>,
        private readonly uploadCloudinary: CloudinaryService) { }
    async createUser(dto: createUserDTO, file: Express.Multer.File): Promise<any> {
        const { fullName, email, password, experienceYear, phoneNo, skills, address,gender } = dto
        

        const userCheck = await this.userModel.findOne({ email: email })
        if (userCheck) throw new ForbiddenException("You Already Have An Account")
        
        const hashPassword = await bcrypt.hash(password, 10)
        const uploadFile = await this.uploadCloudinary.uploadImage(file)
        if (!uploadFile) throw new InternalServerErrorException("Photo Upload Failed")
        
        const userCreate = await this.userModel.create({
            fullName,
            email,
            password: hashPassword,
            address,
            skills,
            phoneNo,
            experienceYear,
            profilePicture: uploadFile.secure_url,
            role: "worker",
            gender,

        })
        if (!userCreate) throw new InternalServerErrorException("User Create Failed")
        
        return{
            userCreate: {
                fullName,
                email,
                address,
                phoneNo,
                
            }
        }
    }
}
