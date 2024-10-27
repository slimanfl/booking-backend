import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { EventsModule } from './events/events.module';
@Module({
  imports: [ConfigModule, DatabaseModule, UsersModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
