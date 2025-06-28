import { Request, Response } from "express";
import { BookmarkService } from "../service/bookmark/BookmarkService";

export class BookmarkController {
    constructor(
        private readonly bookmarkService: BookmarkService
    ) {
        this.bookmarkService = bookmarkService;
    }

    async markFlightAsFavorite(req: Request, res: Response): Promise<void> {
        console.log("Received request to mark flight as favorite");
        const flightNumber = req.body.flightNumber as string;
        if (!flightNumber) {
            res.status(400).json({ msg: "Número do voo é obrigatório" });
            return;
        }

        try {
            await this.bookmarkService.markFlightAsFavorite(flightNumber);
            res.status(200).json({ msg: "Voo marcado como favorito com sucesso" });
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ msg: error.message });
            } else {
                res.status(500).json({ msg: "Erro interno do servidor" });
            }
        }
    }
}