import express, { Express } from "express";
import { router } from "./routes";
import cors from "cors";

export default class App {
    public express: Express;

    constructor() {
        this.express = express();
        this.config();
        this.routes();
    }

    private config(): void {
        this.express.use(express.json());
        this.express.use(cors({
            origin: "http://localhost:3000"
        }))
    }

    private routes(): void {
        this.express.use(router);
    }
}
