import { Flight } from "../../domain/Flight";
import { FlightRepository } from "../../repositories/FlightRepository";

export class FlightService {
    constructor(
        private flightRepository: FlightRepository
    ) {}

    async getAllFlights(): Promise<Flight[]> {
        return this.flightRepository.getAll();
    }
}