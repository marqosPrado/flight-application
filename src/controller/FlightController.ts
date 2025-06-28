import { Request, Response } from "express";
import { FlightService } from "../service/flight/FlightService";

export class FlightController {
    constructor(
        private flightService: FlightService
    ) {}

    async getAllFlights(req: Request, res: Response): Promise<any> {
        try {
            const flights = await this.flightService.getAllFlights();
            res.status(200).json(flights);
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}