import { Repository } from "typeorm";
import { FlightAggregate } from "../aggregates/FlightAgregate";
import { AppDataSource } from "../config/database/data-source";
import { Flight } from "../domain/Flight";

export class FlightRepository {
    private repository: Repository<FlightAggregate> = AppDataSource.getRepository(FlightAggregate);

    async getAll(page: number | undefined, pageSize: number | undefined): Promise<Flight[]> {
        const options: any = {};

        if (pageSize !== undefined && pageSize > 0) {
            options.take = pageSize;
            options.skip = (page && page > 0) ? (page - 1) * pageSize : 0;
        }
        
        const flightAggregates = await this.repository.find(options);
        return flightAggregates.map(flight => flight.toDomain());
    }

    async getFlightByNumber(flightNumber: string): Promise<Flight | null> {
        const flightAggregate = await this.repository.findOne({
            where: { flightNumber },
        });

        if (!flightAggregate) {
            return null;
        }

        return flightAggregate.toDomain();
    }

    async getFlightByOriginDestinationAndDeparture(
        origin: string,
        destination: string,
        departure?: Date
    ): Promise<Flight[]> {
        const where: Record<string, any> = { origin, destination };
        if (departure) {
            where.departure = departure;
        }

        const flightAggregates = await this.repository.find({ where });
        return flightAggregates.map(flight => flight.toDomain());
    }
}