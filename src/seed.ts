import { FlightAggregate } from "./aggregates/FlightAgregate";
import { AppDataSource } from "./config/database/data-source";
import flights from "./mocks/flights.json";

export async function seedFlight() {
    const repository = AppDataSource.getRepository(FlightAggregate);

    for (const flight of flights) {
        let id = parseInt(flight.id);

        const exists = await repository.findOneBy({ id: id });
        if (!exists) {
            await repository.save({
                id: id,
                flightNumber: flight.flightNumber,
                airline: flight.airline,
                origin: flight.origin,
                destination: flight.destination,
                departure: new Date(flight.departure),
                arrival: new Date(flight.arrival),
                price: flight.price
            })
        }
    }

    console.log("Seed completed");
}