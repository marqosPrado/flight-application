import { Request, Response } from "express";
import { FlightService } from "../service/flight/FlightService";
import { FindFlightDto } from "../dto/FindFlightDto";

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

    async getFlightByOriginDestinationAndDeparture(req: Request, res: Response): Promise<any> {
        try {
            const { origin, destination, departure } = req.query;
            console.log("Query parameters:", { origin, destination, departure });

            const dto = new FindFlightDto(
                origin as string,
                destination as string,
                departure ? new Date(departure as string) : undefined
            )

            const flights = await this.flightService.getFlightByOriginDestinationAndDeparture(dto);
            res.status(200).json(flights);
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes("Nenhum voo encontrado com os critérios fornecidos.")) {
                    res.status(404).json({ message: error.message });
                } else {
                    res.status(400).json({ message: error.message });
                }
            } else {
                res.status(500).json({ message: "Internal server error" });
            }
        }
    }

    async getFlightByNumber(req: Request, res: Response): Promise<any> {
        try {
            const flightNumber = req.params.flightNumber;

            const flight = await this.flightService.getFlightByNumber(flightNumber);
            res.status(200).json(flight);
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes("Voo não encontrado")) {
                    res.status(404).json({ message: error.message });
                } else {
                    res.status(400).json({ message: error.message });
                }
            } else {
                res.status(500).json({ message: "Internal server error" });
            }
        }
    }
}