import React from "react";
import { Text } from "../common/text";

interface GameStatusProps {
  playerChoice: string;
  computerChoice: string;
  winner: string;
  roundsWons: number;
  roundsLost: number;
  roundsPlayed: number;
}

export const GameStatus: React.FC<GameStatusProps> = ({
  playerChoice,
  computerChoice,
  winner,
  roundsWons,
  roundsLost,
  roundsPlayed,
}) => {
  return (
    <div>
      <Text variant="game-status">
        <Text as="span" color="neutral" className="font-bold">
          {playerChoice}{" "}
        </Text>
        VS
        <Text as="span" color="accent" className="font-bold">
          {" "}
          {computerChoice}
        </Text>
      </Text>
      <Text color="winner">{winner}</Text>
      <Text variant="body">
        <Text as="span" color="neutral" className="font-bold">
          Rounds won {roundsWons}
        </Text>
        -
        <Text as="span" color="accent" className="font-bold">
          {roundsLost} Rounds lost
        </Text>
      </Text>
      <Text variant="body">Rounds Played: {roundsPlayed}</Text>
    </div>
  );
};
