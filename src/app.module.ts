import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { databaseModule } from './database.module';


@Module({
  imports: [UserModule,databaseModule],
  
})
export class AppModule {}
