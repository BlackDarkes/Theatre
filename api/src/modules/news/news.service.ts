import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { INews } from "src/types/news.interface";
import { DataSource } from "typeorm";

@Injectable()
export class NewsService {
	constructor(
		@Inject("DATA_SOURCE")
		private readonly dataSource: DataSource,
	) {}

	async getAllNews(): Promise<INews[]> {
		try {
			const news: INews[] =
				await this.dataSource.query<INews[]>("select * from news");

			if (news.length === 0) {
				throw new NotFoundException("Новости не найдены!");
			}

			return news;
		} catch (error) {
			console.log("Ошибка при запросе мероприятия:", error);
			throw error;
		}
	}

  async getNewsById(id: string): Promise<INews> {
    try {
      const oneNews: INews[] = await this.dataSource.query<INews[]>("select * from news where id = $1", [id]);

      if (oneNews.length === 0) {
        throw new NotFoundException("Новость не найдена!");
      }

      return oneNews[0];
    } catch(error) {
      console.log("Ошибка при запросе мероприятия:", error);
      throw error;
    }
  }
}
