import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT!) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB_NAME || "theatre",
  entities: [__dirname + "/../entities/*.entity.ts"],
  migrations: [__dirname + "/../migrations/*.ts"],
  synchronize: false,
  logging: true
})

export const DatabaseSource = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      return AppDataSource.initialize();
    }
  }
]