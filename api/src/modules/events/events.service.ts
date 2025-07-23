import { Inject, Injectable } from '@nestjs/common';
import { IEvents } from 'src/types/events.interface';
import { DataSource } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @Inject('DATA_SOURCE')
    private readonly dataSource: DataSource,
  ) {}

  async getEvents(title: string) {
    try {
      const event: IEvents[] = await this.dataSource.query(
        'select * from events where title = $1',
        [title],
      );

      if (event.length === 0) {
        return {
          message: 'Мероприятие не найдено!',
        };
      }

      return [event]
    } catch (error) {}
  }
}
