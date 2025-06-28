import { Request, Response, Router } from "express";
import { FlightRepository } from "../repositories/FlightRepository";
import { FlightService } from "../service/flight/FlightService";
import { FlightController } from "../controller/FlightController";

const repository = new FlightRepository();
const service = new FlightService(repository);
const controller = new FlightController(service);

const router: Router = Router();
router.get("/", controller.getAllFlights.bind(controller));
router.get("/search", controller.getFlightByOriginDestinationAndDeparture.bind(controller));

export default router;