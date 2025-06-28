import App from "./app";
import {AppDataSource} from "./config/database/data-source";
import {seedFlight} from "./seed";

const app = new App();
const port: number = 3000;

AppDataSource.initialize()
    .then((): void => {
        console.log("Database connection established");
        app.express.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .then( async () => await seedFlight())
    .catch((error: Error) => {
        console.error("Error during Data Source initialization", error);
    })