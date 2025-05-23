import { useState } from "react";
import { Player } from "@/lib/types/game";

export const useGame = (username: string) => {
  const [playerChoice, setPlayerChoice] = useState("Your choice");
  const [computerChoice, setComputerChoice] = useState("Computer's choice");
  const [winner, setWinner] = useState("");
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [roundsWons, setRoundsWons] = useState(0);
  const [roundsLost, setRoundsLost] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [message, setMessage] = useState("");

  const fetchPlayerData = async (username: string) => {
    const response = await fetch(
      "http://localhost:4000/players?username=" + username
    );
    const playerData: Player[] = await response.json();
    return playerData[0];
  };

  const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const updatePlayersStats = async (
    username: string,
    wins: number,
    loss: number
  ) => {
    const playerData = await fetchPlayerData(username);

    const updatedGamesPlayed = playerData.games + 1;
    const updatedWins = playerData.win + wins;
    const updatedLoss = playerData.loss + loss;
    const updatedRatio = (updatedWins / updatedLoss).toFixed(2);

    await fetch("http://localhost:4000/players/" + playerData.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: playerData.id,
        username: playerData.username,
        games: updatedGamesPlayed,
        win: updatedWins,
        loss: updatedLoss,
        ratio: updatedRatio,
      }),
    });
  };

  const checkGameOver = (roundsWons: number, roundsLost: number) => {
    if (roundsWons === 2) {
      setMessage("You are the winner of this best of 3! Gg!");
      setPlayerWins((prev) => prev + 1);
      setGamesPlayed((prev) => prev + 1);
      updatePlayersStats(username, 1, 0);
    } else if (roundsLost === 2) {
      setMessage("The computer is the winner of this best of 3! Try again!");
      setComputerWins((prev) => prev + 1);
      setGamesPlayed((prev) => prev + 1);
      updatePlayersStats(username, 0, 1);
    }
  };

  const playGame = (choice: string) => {
    setPlayerChoice(choice);
    const computer = getComputerChoice();
    setComputerChoice(computer);

    let newRoundsWons = roundsWons;
    let newRoundsLost = roundsLost;

    if (choice === computer) {
      setWinner("It's a tie!");
      setRoundsPlayed((prev) => prev + 1);
    } else if (
      (choice === "rock" && computer === "scissors") ||
      (choice === "scissors" && computer === "paper") ||
      (choice === "paper" && computer === "rock")
    ) {
      setWinner("You win this round!");
      newRoundsWons += 1;
      setRoundsPlayed((prev) => prev + 1);
    } else {
      setWinner("You lose this round!");
      newRoundsLost += 1;
      setRoundsPlayed((prev) => prev + 1);
    }

    setRoundsWons(newRoundsWons);
    setRoundsLost(newRoundsLost);
    checkGameOver(newRoundsWons, newRoundsLost);
  };

  const resetGame = () => {
    setRoundsLost(0);
    setRoundsWons(0);
    setRoundsPlayed(0);
    setPlayerChoice("Your choice");
    setComputerChoice("Computer's choice");
    setWinner("");
    setMessage("");
  };

  return {
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
  };
};
