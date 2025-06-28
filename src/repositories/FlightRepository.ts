import { Repository } from "typeorm";
import { FlightAggregate } from "../aggregates/FlightAgregate";
import { AppDataSource } from "../config/database/data-source";
import { Flight } from "../domain/Flight";

export class FlightRepository {
    private repository: Repository<FlightAggregate> = AppDataSource.getRepository(FlightAggregate);

    async getAll(): Promise<Flight[]> {
        const flightAggregates = await this.repository.find();
        return flightAggregates.map(flight => flight.toDomain());
    }
}