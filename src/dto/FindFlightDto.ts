export class FindFlightDto {
    constructor (
        public origin: string,
        public destination: string,
        public departure?: Date
    ) {
        if (!origin || origin.trim() === "") {
            throw new Error("Parâmetro 'origin' é obrigatório e não pode ser vazio.");
        }
        
        if (!destination || destination.trim() === "") {
            throw new Error("Parâmetro 'destination' é obrigatório e não pode ser vazio.");
        }

        if (departure && !(departure instanceof Date)) {
            throw new Error("Parâmetro 'departure' deve ser uma data válida");
        }

        this.origin = origin.trim();
        this.destination = destination.trim();
        this.departure = departure ? departure : undefined;
    }
}