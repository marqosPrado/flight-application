import { Request, Response } from "express";
import { FlightService } from "../service/flight/FlightService";

export class FlightController {
    constructor(
        private flightService: FlightService
    ) {}

    async getAllFlights(req: Request, res: Response): Promise<any> {
        try {
            const page = req.query.page ? parseInt(req.query.page as string) : undefined;
            const pageSize = req.query.pageSize ? parseInt(req.query.pageSize as string) : undefined;

            const flights = await this.flightService.getAllFlights(page, pageSize);
            res.status(200).json(flights);
        } catch (error) {
            console.error("Error fetching flights:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}