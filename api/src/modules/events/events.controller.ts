import { Controller, Get, Param } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get("/")
  getEvents(@Param() title: string) {
    return this.eventsService.getEvents(title);
  }
}
