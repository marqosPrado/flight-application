import { Flight } from "../domain/Flight";

export class BookmarkRepository {
    private cache: Set<string> = new Set();

    async markFlightAsFavorite(flight: Flight): Promise<void> {
        this.cache.add(flight.flightNumber);
    }

    async hasFlightAsFavorite(flightNumber: string): Promise<boolean> {
        return this.cache.has(flightNumber);
    }
}