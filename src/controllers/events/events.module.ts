import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventService } from './events.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Events, EventsSchema } from './events.schema';

@Module({
  imports: [ MongooseModule.forFeature([{ name: Events.name, schema: EventsSchema }]) ],
  controllers: [EventsController],
  providers: [EventService],
})
export class EventsModule {}
