import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import cloudinary, { UploadApiResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor(private readonly configService: ConfigService) {
 
    cloudinary.v2.config({
      cloud_name: this.configService.get<string>('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get<string>('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get<string>('CLOUDINARY_API_SECRET'),
    });
  }

  async uploadImage(file: Express.Multer.File): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      cloudinary.v2.uploader
        .upload_stream({ folder: 'gigPoint' }, (error, result) => {
          if (error) return reject(error);
          if (!result) return reject(new Error('Cloudinary Uploading Failed'));
          resolve(result);
        })
        .end(file.buffer);
    });
  }
}
