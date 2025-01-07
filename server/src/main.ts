import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.use(cookieParser())
  app.enableCors({
    origin: process.env.CLIENT_URL ?? 'http://localhost:4000',
    credentials: true,
    exposedHeaders: 'set-cookie',
  })

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
