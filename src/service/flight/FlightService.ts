import { Flight } from "../../domain/Flight";
import { FlightDto } from "../../dto/FlightsDto";
import { FlightRepository } from "../../repositories/FlightRepository";

export class FlightService {
    constructor(
        private flightRepository: FlightRepository
    ) {}

    async getAllFlights(page: number | undefined, pageSize: number | undefined): Promise<FlightDto[]> {
        const flights = await this.flightRepository.getAll(page, pageSize);
        if (flights.length === 0) {
            return [];
        }
        return FlightDto.fromDomainList(flights);
    }
}