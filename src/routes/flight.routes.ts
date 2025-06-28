import { Request, Response, Router } from "express";
import { FlightRepository } from "../repositories/FlightRepository";
import { FlightService } from "../service/flight/FlightService";
import { FlightController } from "../controller/FlightController";

const repository = new FlightRepository();
const service = new FlightService(repository);
const controller = new FlightController(service);

const router: Router = Router();
router.get("/", (req: Request, res: Response) => {controller.getAllFlights(req, res)});

export default router;