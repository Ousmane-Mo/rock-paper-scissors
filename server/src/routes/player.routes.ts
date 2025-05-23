import { Router } from "express";
import { PlayerController } from "../controllers/player.controller";

const router = Router();
const playerController = new PlayerController();

// Get all players
router.get("/", playerController.getAllPlayers.bind(playerController));

// Get player by username
router.get(
  "/:username",
  playerController.getPlayerByUsername.bind(playerController)
);

// Create new player
router.post("/", playerController.createPlayer.bind(playerController));

// Update player stats
router.put("/:id", playerController.updatePlayerStats.bind(playerController));

export default router;
