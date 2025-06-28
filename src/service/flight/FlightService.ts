import { Flight } from "../../domain/Flight";
import { FindFlightDto } from "../../dto/FindFlightDto";
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

    async getFlightByOriginDestinationAndDeparture(findFlightDto: FindFlightDto): Promise<FlightDto[]> {
        const flightDate = findFlightDto.departure;
        const currentDate = new Date();
        currentDate.setMilliseconds(0);

        if (flightDate && flightDate.getTime() < currentDate.getTime()) {
            throw new Error("A data de partida não pode ser no passado.");
        }
        
        const flights: Flight[] | null = await this.flightRepository.getFlightByOriginDestinationAndDeparture(
            findFlightDto.origin,
            findFlightDto.destination,
            findFlightDto.departure
        );
        
        if (flights.length === 0) {
            throw new Error("Nenhum voo encontrado com os critérios fornecidos.");
        }

        return FlightDto.fromDomainList(flights);
    }
}