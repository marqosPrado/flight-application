import { FlightDto } from "../../dto/FlightsDto";
import { BookmarkRepository } from "../../repositories/BookmarkRepository";
import { FlightRepository } from "../../repositories/FlightRepository";

export class BookmarkService {
    constructor(
        private readonly flightRepository: FlightRepository,
        private readonly bookmarkRepository: BookmarkRepository
    ) {
        this.flightRepository = flightRepository;
        this.bookmarkRepository = bookmarkRepository;
    }

    async markFlightAsFavorite(flightNumber: string): Promise<void> {
        const flight = await this.flightRepository.getFlightByNumber(flightNumber);
        if (!flight) {
            throw new Error("Voo não encontrado");
        }

        if (await this.bookmarkRepository.hasFlightAsFavorite(flightNumber)) {
            throw new Error("Voo já está marcado como favorito");
        }

        await this.bookmarkRepository.markFlightAsFavorite(flight);
    }

    async getAllBookmarks(): Promise<FlightDto[]> {
        const flights = await this.bookmarkRepository.getAllFavorites();
        return FlightDto.fromDomainList(flights);
    }

    async unmarkFlightAsFavorite(flightNumber: string): Promise<void> {
        if (!(await this.bookmarkRepository.hasFlightAsFavorite(flightNumber))) {
            throw new Error("Voo não está marcado como favorito");
        }

        await this.bookmarkRepository.unmarkFlightAsFavorite(flightNumber)
    }
}