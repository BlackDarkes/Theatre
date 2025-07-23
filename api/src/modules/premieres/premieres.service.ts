import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { IPremieres } from "src/types/premieres.interface";
import { DataSource } from "typeorm";

@Injectable()
export class PremieresService {
	constructor(
		@Inject("DATA_SOURCE")
		private readonly dataSource: DataSource,
	) {}

	async getAllPremieres() {
		try {
			const premieres: IPremieres[] = await this.dataSource.query<IPremieres[]>(
				"select * from premieres",
			);

			if (premieres.length === 0) {
				throw new NotFoundException("Премьеры не найдены!");
			}

			return premieres;
		} catch (error) {
			console.log("Ошибка при запросе премьер: ", error);
			throw error;
		}
	}

	async getPremierById(id: string) {
		try {
			const premieres: IPremieres[] = await this.dataSource.query(
				"select * from premieres where id = $1",
				[id],
			);

			if (premieres.length === 0) {
				throw new NotFoundException("Премьера не найдено!");
			}

			return premieres[0];
		} catch (error) {
			console.log("Ошибка при получении премьеры: ", error);
			throw error;
		}
	}
}
