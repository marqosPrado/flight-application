export class Flight {
    private readonly _id: number;
    private _flightNumber: string;
    private _airline: string;
    private _origin: string;
    private _destination: string;
    private _departure: Date;
    private _arrival: Date;
    private _price: number;

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
        this._flightNumber = flightNumber;
        this._airline = airline;
        this._origin = origin;
        this._destination = destination;
        this._departure = departure;
        this._arrival = arrival;
        this._price = price;
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
        this._flightNumber = value;
    }

    get airline(): string {
        return this._airline;
    }

    set airline(value: string) {
        this._airline = value;
    }

    get origin(): string {
        return this._origin;
    }

    set origin(value: string) {
        this._origin = value;
    }

    get destination(): string {
        return this._destination;
    }

    set destination(value: string) {
        this._destination = value;
    }

    get departure(): Date {
        return this._departure;
    }

    set departure(value: Date) {
        this._departure = value;
    }

    get arrival(): Date {
        return this._arrival;
    }
    
    set arrival(value: Date) {
        this._arrival = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
}