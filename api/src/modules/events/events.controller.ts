import { Controller, Get, Param } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get(":title")
  getEvents(@Param("title") title: string) {
    return this.eventsService.getEvents(title);
  }
}
