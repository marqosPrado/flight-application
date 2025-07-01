import App from "./app";
import {AppDataSource} from "./config/database/data-source";
import {seedFlight} from "./seed";

const app = new App();
const port: number = 3001;

AppDataSource.initialize()
    .then(async () => {
        console.log("[*] Banco conectado");
        await seedFlight();
        await AppDataSource.runMigrations();
        app.express.listen(port, () => {
            console.log(`[*] Servidor rodando em http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("[*] Falha ao inicializar o servidor:", error);
    });