import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";


@Module({
    imports: [
        MongooseModule.forRoot('http://localhost/27017/gigpointDb')
    ],
    
})
export class databaseModule{
    
}