import { Router } from "express";
import flightRoutes from "./flight.routes"
import bookmarkRoutes from "./bookmark.routes";

export const router: Router = Router()
    .use("/api/flights", flightRoutes)
    .use("/api/bookmarks", bookmarkRoutes);