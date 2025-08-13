import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    async createUser():Promise<string>{
        const userCreate = "helllo From Gigpoint"
        return userCreate
    }
}
