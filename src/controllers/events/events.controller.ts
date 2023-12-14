import { Controller, Get,Post,Body, Query } from '@nestjs/common';
import { EventService } from './events.service';
import { CreateEventDto } from './events.dto';

@Controller("event")
export class EventsController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async createUser(@Body() body: CreateEventDto) {
     return await this.eventService.createUser(body);
  }

  @Get()
  async getUser(@Query() pagination:Record<string,any>) {
    return await  this.eventService.getUser(pagination);
  }
}
