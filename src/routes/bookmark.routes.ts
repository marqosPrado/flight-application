import { Request, Response, Router } from "express";
import { BookmarkRepository } from "../repositories/BookmarkRepository";
import { BookmarkService } from "../service/bookmark/BookmarkService";
import { FlightRepository } from "../repositories/FlightRepository";
import { BookmarkController } from "../controller/BookmarkController";

const flightRepository = new FlightRepository(); // Assuming you have a FlightRepository
const bookmarkRespository = new BookmarkRepository();
const service = new BookmarkService(flightRepository, bookmarkRespository);
const controller = new BookmarkController(service);

const router: Router = Router();
router.get("/", (req: Request, res: Response) => {
    controller.getBookmarkedFlights(req, res);
});

router.post("/", (req: Request, res: Response) => { 
    controller.markFlightAsFavorite(req, res)
});

router.delete("/:flightNumber", (req: Request, res: Response) => {})

export default router;