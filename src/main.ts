import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import  cors from 'cors'

async function gigPoint() {
  const app = await NestFactory.create(AppModule);
  const corsOption = (origin: string | undefined, callback:(err: Error | null, allow?: boolean)=>void ):void=> {
    const allowedOrigin: string[] = ['http://localhost:5173'];
    if (!origin || allowedOrigin.includes(origin)) {
      callback(null,true)
    }
    else {
      callback(new Error("Not Allowed By CORS"),false)
    }
  
  }

  app.use(cors({
    origin: corsOption,
    credentials: true
  }));
  await app.listen(process.env.PORT ?? 3000);
}
gigPoint();
