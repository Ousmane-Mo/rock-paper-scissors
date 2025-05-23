import React from "react";
import { Button } from "../common/button";
import { Text } from "../common/text";

interface GameStatsProps {
  message: string;
  gamesPlayed: number;
  playerWins: number;
  computerWins: number;
  onReset: () => void;
}

export const GameStats: React.FC<GameStatsProps> = ({
  message,
  gamesPlayed,
  playerWins,
  computerWins,
  onReset,
}) => {
  return (
    <>
      <div className="my-2">
        <Text color="neutral" className="font-bold">
          {message}
        </Text>
        <Text variant="body">Overall games played: {gamesPlayed}</Text>
        <Text variant="body">
          <Text as="span" color="neutral" className="font-bold">
            Players wins : {playerWins}{" "}
          </Text>
          <Text as="span" color="accent" className="font-bold">
            {" "}
            Computers wins : {computerWins}
          </Text>
        </Text>
      </div>
      <div className="my-2">
        Please
        <Button variant="reset" size="sm" onClick={onReset}>
          reset
        </Button>
        before playing again!
      </div>
    </>
  );
};
