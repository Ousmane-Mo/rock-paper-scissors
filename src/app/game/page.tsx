"use client";
import React from "react";
import { useGame } from "@/lib/hooks/useGame";
import { GameControls } from "@/lib/components/game/GameControls";
import { GameStatus } from "@/lib/components/game/GameStatus";
import { GameStats } from "@/lib/components/game/GameStats";

const GamePage = ({ params }: { params: { username: string } }) => {
  const { username } = params;
  const {
    playerChoice,
    computerChoice,
    winner,
    roundsPlayed,
    roundsWons,
    roundsLost,
    gamesPlayed,
    playerWins,
    computerWins,
    message,
    playGame,
    resetGame,
  } = useGame(username);

  return (
    <div className="my-3 text-center">
      <h2 className="text-center text-2xl my-2 underline underline-offset-2">
        Now let&apos;s play
      </h2>
      <p>You are playing as {username}</p>
      <div className="my-2 py-3 px-4 border-2 bg-slate-800 text-neutral-100 border-amber-500 rounded-3xl">
        <GameControls onPlay={playGame} />
        <GameStatus
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          winner={winner}
          roundsWons={roundsWons}
          roundsLost={roundsLost}
          roundsPlayed={roundsPlayed}
        />
        <GameStats
          message={message}
          gamesPlayed={gamesPlayed}
          playerWins={playerWins}
          computerWins={computerWins}
          onReset={resetGame}
        />
      </div>
    </div>
  );
};

export default GamePage;
