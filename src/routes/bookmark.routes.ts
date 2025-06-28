import { Request, Response, Router } from "express";

const router: Router = Router();
router.get("/", (req: Request, res: Response) => {})
router.post("/", (req: Request, res: Response) => {})
router.delete("/:flightId", (req: Request, res: Response) => {})

export default router;