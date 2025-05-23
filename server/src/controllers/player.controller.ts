import { Request, Response } from "express";
import { PlayerModel } from "../models/player.model";
import { CreatePlayerDto, UpdatePlayerStatsDto } from "../types/player";

export class PlayerController {
  async getAllPlayers(req: Request, res: Response) {
    try {
      const players = await PlayerModel.find();
      res.json(players);
    } catch (error) {
      res.status(500).json({ message: "Error fetching players" });
    }
  }

  async getPlayerByUsername(req: Request, res: Response) {
    try {
      const player = await PlayerModel.findOne({
        username: req.params.username,
      });
      if (!player) {
        return res.status(404).json({ message: "Player not found" });
      }
      res.json(player);
    } catch (error) {
      res.status(500).json({ message: "Error fetching player" });
    }
  }

  async createPlayer(req: Request<{}, {}, CreatePlayerDto>, res: Response) {
    try {
      const { username } = req.body;
      const existingPlayer = await PlayerModel.findOne({ username });

      if (existingPlayer) {
        return res.status(400).json({ message: "Username already exists" });
      }

      const player = await PlayerModel.create({ username });
      res.status(201).json(player);
    } catch (error) {
      res.status(500).json({ message: "Error creating player" });
    }
  }

  async updatePlayerStats(
    req: Request<{ id: string }, {}, UpdatePlayerStatsDto>,
    res: Response
  ) {
    try {
      const { id } = req.params;
      const stats = req.body;

      const player = await PlayerModel.findByIdAndUpdate(
        id,
        { $set: stats },
        { new: true }
      );

      if (!player) {
        return res.status(404).json({ message: "Player not found" });
      }

      res.json(player);
    } catch (error) {
      res.status(500).json({ message: "Error updating player stats" });
    }
  }
}
