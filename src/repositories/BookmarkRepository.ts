import { Flight } from "../domain/Flight";

export class BookmarkRepository {
    private cache: Set<Flight> = new Set();

    async markFlightAsFavorite(flight: Flight): Promise<void> {
        this.cache.add(flight);
    }

    async hasFlightAsFavorite(flightNumber: string): Promise<boolean> {
        for (const flight of this.cache) {
            if (flight.flightNumber === flightNumber) {
                return true;
            }
        }
        return false;
    }

    async getAllFavorites(): Promise<Flight[]> {
        return Array.from(this.cache);
    }
}