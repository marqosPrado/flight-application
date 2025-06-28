import { Request, Response } from "express";
import { BookmarkService } from "../service/bookmark/BookmarkService";

export class BookmarkController {
    constructor(
        private readonly bookmarkService: BookmarkService
    ) {
        this.bookmarkService = bookmarkService;
    }

    async markFlightAsFavorite(req: Request, res: Response): Promise<void> {
        const { flightNumber } = req.body;

        if (typeof flightNumber !== 'string' || flightNumber.trim().length === 0) {
            res.status(400).json({ msg: "Número do voo é obrigatório" });
            return;
        }

        try {
            await this.bookmarkService.markFlightAsFavorite(flightNumber.trim());
            res.status(200).json({ msg: "Voo marcado como favorito com sucesso" });
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === "Voo não encontrado") {
                    res.status(404).json({ msg: error.message });
                } else if (error.message === "Voo já está marcado como favorito") {
                    res.status(409).json({ msg: error.message });
                } else {
                    res.status(400).json({ msg: error.message });
                }
            } else {
                res.status(500).json({ msg: "Erro interno do servidor" });
            }
        }
    }

    async getBookmarkedFlights(_: Request, res: Response): Promise<void> {
        try {
            const flights = await this.bookmarkService.getAllBookmarks();
            res.status(200).json(flights);
        } catch (error) {
            res.status(500).json({ msg: "Erro ao buscar voos favoritos" });
        }
    }

    async unmarkFlightAsFavorite(req: Request, res: Response): Promise<void> {
        const { flightNumber } = req.body;

        if (typeof flightNumber !== 'string' || flightNumber.trim().length === 0) {
            res.status(400).json({ msg: "Número do voo é obrigatório" });
            return;
        }

        try {
            await this.bookmarkService.unmarkFlightAsFavorite(flightNumber.trim());
            res.status(200).json({ msg: "Voo desmarcado como favorito com sucesso" });
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === "Voo não está marcado como favorito") {
                    res.status(404).json({ msg: error.message });
                }
            } else {
                res.status(500).json({ msg: "Erro interno do servidor" });
            }
        }
    }
}