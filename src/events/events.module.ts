import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';

import { ConfigModule } from '@nestjs/config';
import { eventsProviders } from './providers/events.provider';
import { EventService } from './services/events.service';
import { EventController } from './controller/events.controller';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot()],
  controllers: [EventController],
  providers: [...eventsProviders, EventService],
})
export class EventsModule {}
