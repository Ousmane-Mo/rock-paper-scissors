import React from "react";
import { Button } from "../common/button";

interface GameControlsProps {
  onPlay: (choice: string) => void;
}

export const GameControls: React.FC<GameControlsProps> = ({ onPlay }) => {
  return (
    <div className="flex justify-evenly my-2">
      <Button variant="game" onClick={() => onPlay("rock")}>
        Rock
      </Button>
      <Button variant="game" onClick={() => onPlay("paper")}>
        Paper
      </Button>
      <Button variant="game" onClick={() => onPlay("scissors")}>
        Scissors
      </Button>
    </div>
  );
};
