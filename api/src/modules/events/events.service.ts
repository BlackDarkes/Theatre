import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { IEvents } from "src/types/events.interface";
import { DataSource } from "typeorm";

@Injectable()
export class EventsService {
	constructor(
		@Inject("DATA_SOURCE")
		private readonly dataSource: DataSource,
	) {}

	async getEvents(title: string): Promise<IEvents> {
		try {
			const event: IEvents[] = await this.dataSource.query<IEvents[]>(
				"select * from events where title = $1",
				[title],
			);

			if (event.length === 0) {
				throw new NotFoundException("Мероприятие не найдено!");
			}

			return event[0];
		} catch (error) {
			console.log("Ошибка при запросе мероприятия:", error);
			throw error;
		}
	}
}
