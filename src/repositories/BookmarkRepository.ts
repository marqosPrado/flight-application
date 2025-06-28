import { Flight } from "../domain/Flight";

export class BookmarkRepository {
    private cache: Set<Flight> = new Set();

    async markFlightAsFavorite(flight: Flight): Promise<void> {
        this.cache.add(flight);
    }

    async hasFlightAsFavorite(flightNumber: string): Promise<boolean> {
        return Array.from(this.cache).some(flight => flight.flightNumber === flightNumber);
    }

    async getAllFavorites(): Promise<Flight[]> {
        return Array.from(this.cache);
    }
}