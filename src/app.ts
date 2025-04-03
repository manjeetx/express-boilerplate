import express from "express";
import { AppDataSource } from "./config/database";
import { config } from "dotenv";
import userRoutes from "./routes/routes";

config(); // Load environment variables

const app = express();
app.use(express.json());

app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });
