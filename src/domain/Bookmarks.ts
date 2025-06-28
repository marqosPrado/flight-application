import { Flight } from "./Flight";

export class Bookmarks {
    private _flights: Flight[];

    constructor(
        flights: Flight[]
    ) {
        this._flights = flights;
    }

    get flights(): Flight[] {
        return this.flights;
    }

    set flights(flights: Flight[]) {
        this._flights = flights;
    }
}