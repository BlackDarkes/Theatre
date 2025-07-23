import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @Inject("DATA_SOURCE")
    private readonly dataSource: DataSource
  ) {}

  async getEvents() {
    const [data] = await this.dataSource.query("select * from events");

    return data.actors[1];
  }
}
