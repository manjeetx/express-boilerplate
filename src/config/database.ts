import { DataSource } from "typeorm";
import { config } from "dotenv";
import { resolve } from "path";

config(); // Load environment variables

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: process.env.DB_SYNC === "true",
    logging: false,
    entities: [resolve(__dirname, "../entities/*.ts")],
});
