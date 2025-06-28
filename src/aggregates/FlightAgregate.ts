import { Column, Entity, PrimaryColumn } from "typeorm";
import { Flight } from "../domain/Flight";

@Entity({ name: 'FLIGHTS' })
export class FlightAggregate {
    @PrimaryColumn({ name: 'FLI_ID' })
    id: number;

    @Column({ name: 'FLI_FLIGHT_NUMBER', length: 5, nullable: false })
    flightNumber: string;

    @Column({ type: 'varchar', name: 'FLI_AIRLINE', length: 50, nullable: false })
    airline: string;

    @Column({ name: 'FLI_ORIGIN', length: 3, nullable: false })
    origin: string;

    @Column({ name: 'FLI_DESTINATION', length: 3, nullable: false })
    destination: string;

    @Column({ name: 'FLI_DEPARTURE', type: 'timestamp', nullable: false })
    departure: Date;

    @Column({ name: 'FLI_ARRIVAL', type: 'timestamp', nullable: false })
    arrival: Date;

    @Column({ name: 'FLI_PRICE', type: 'decimal', precision: 10, scale: 2, nullable: false })
    price: number;

    constructor(
        id: number,
        flightNumber: string,
        airline: string,
        origin: string,
        destination: string,
        departure: Date,
        arrival: Date,
        price: number
    ) {
        this.id = id;
        this.flightNumber = flightNumber;
        this.airline = airline;
        this.origin = origin;
        this.destination = destination;
        this.departure = departure;
        this.arrival = arrival;
        this.price = price;
    }

    toDomain(): Flight {
        return Flight.create(
            this.flightNumber,
            this.airline,
            this.origin,
            this.destination,
            this.departure,
            this.arrival,
            this.price,
            this.id
        )
    }
}