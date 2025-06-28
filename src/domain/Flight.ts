export class Flight {
    private readonly _id: number;
    private _flightNumber: string = '';
    private _airline: string = '';
    private _origin: string = '';
    private _destination: string = '';
    private _departure: Date = new Date();
    private _arrival: Date = new Date();
    private _price: number = 0;

    private constructor(
        flightNumber: string,
        airline: string,
        origin: string,
        destination: string,
        departure: Date,
        arrival: Date,
        price: number,
        id?: number
    ) {
        this._id = id ? id : Math.floor(Math.random() * 10000);
        this.flightNumber = flightNumber;
        this.airline = airline;
        this.origin = origin;
        this.destination = destination;
        this.departure = departure;
        this.arrival = arrival;
        this.price = price;
    }

    static create(
        flightNumber: string,
        airline: string,
        origin: string,
        destination: string,
        departure: Date,
        arrival: Date,
        price: number,
        id?: number
    ): Flight {
        return new Flight(
            flightNumber,
            airline,
            origin,
            destination,
            departure,
            arrival,
            price,
            id
        );
    }

    get id(): number {
        return this._id;
    }

    get flightNumber(): string {
        return this._flightNumber;
    }

    set flightNumber(value: string) {
        if (!value || value.length === 0) {
            throw new Error("Flight number cannot be empty");
        }
        this._flightNumber = value.trim();
    }

    get airline(): string {
        return this._airline;
    }

    set airline(value: string) {
        if (!value || value.length === 0) {
            throw new Error("Airline não pode ser vazio");
        }
        this._airline = value.trim();
    }

    get origin(): string {
        return this._origin;
    }

    set origin(value: string) {
        if (!value || value.length !== 3) {
            throw new Error("Origem deve ter exatamente 3 caracteres");
        }
        this._origin = value.trim().toUpperCase();
    }

    get destination(): string {
        return this._destination;
    }

    set destination(value: string) {
        if (!value || value.length !== 3) {
            throw new Error("Destino deve ter exatamente 3 caracteres");
        }
        this._destination = value.trim().toUpperCase();
    }

    get departure(): Date {
        return this._departure;
    }

    set departure(value: Date) {
        if (!(value instanceof Date) || isNaN(value.getTime())) {
            throw new Error("Data de partida inválida");
        }
        this._departure = value;
    }

    get arrival(): Date {
        return this._arrival;
    }
    
    set arrival(value: Date) {
        if (!(value instanceof Date) || isNaN(value.getTime())) {
            throw new Error("Data de chegada inválida");
        }
        this._arrival = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value < 0) {
            throw new Error("Preço deve ser um número positivo");
        }
        this._price = value;
    }
}