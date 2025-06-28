import { Flight } from "../domain/Flight";

export class FlightDto {
    flightNumber: string;
    airline: string;
    origin: string;
    destination: string;
    departure: Date;
    arrival: Date;
    price: number;

    constructor(
        flightNumber: string,
        airline: string,
        origin: string,
        destination: string,
        departure: Date,
        arrival: Date,
        price: number
    ) {
        this.flightNumber = flightNumber;
        this.airline = airline;
        this.origin = origin;
        this.destination = destination;
        this.departure = departure;
        this.arrival = arrival;
        this.price = price;
    }

    static fromDomain(flight: Flight): FlightDto {
        return new FlightDto(
            flight.flightNumber,
            flight.airline,
            flight.origin,
            flight.destination,
            flight.departure,
            flight.arrival,
            flight.price
        );
    }

    static fromDomainList(flights: Flight[]): FlightDto[] {
        return flights.map(flight => FlightDto.fromDomain(flight));
    }
}