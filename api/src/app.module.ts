import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { EventsModule } from './modules/events/events.module';
import { NewsModule } from './modules/news/news.module';
import { PremieresModule } from './modules/premieres/premieres.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    DatabaseModule,
    EventsModule,
    NewsModule,
    PremieresModule,
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public"),
      serveRoot: "/",
    })
  ],
})
export class AppModule {}
