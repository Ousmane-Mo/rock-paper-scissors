"use client"
import React, {useState} from "react";
import { Player } from "../components/table";

const Rpc = ({username}: {username: string}) => {
  // Game State
  // ----------
  // The following state variables are used to track the game's progress.
  const [playerChoice, setPlayerChoice] = useState('Your choice');
  const [computerChoice, setComputerChoice] = useState('Computer\'s choice');
  const [winner, setWinner] = useState('');
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [roundsWons, setRoundsWons] = useState(0);
  const [roundsLost, setRoundsLost] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [message, setMessage] = useState('');

  /**
   * Fetch the player
   * 
   * This function fetches the current player
   * 
   * @param {string} username Players username
   * @returns {Player[]} Returns the player's data as a Player[] object
  */
  async function fetchPlayerData(username: string) {
    const response = await fetch('http://localhost:4000/players?username=' + username);
    const playerData: Player[] = await response.json();
    return playerData[0]; // Return the existing player data

  }

  /**
   * Generate Computer Choice
   * 
   * This function generates the computer's random choice.
   * 
   * @returns {string} - The computer's choice (rock, paper, or scissors).
  */
  const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  /**
   * Play Game
   * 
   * This function handles the game logic when a player makes a choice.
   * 
   * @param {string} choice - The player's choice (rock, paper, or scissors).
  */
  const playGame = (choice: string) => {

    setPlayerChoice(choice);
    const computer = getComputerChoice();
    setComputerChoice(computer);

    // Initialize variables to hold the updated rounds won and lost
    let newRoundsWons = roundsWons;
    let newRoundsLost = roundsLost;

    if (choice === computer) {
      setWinner('It\'s a tie!');
      setRoundsPlayed(prev => prev + 1)

    } else if (
      (choice === 'rock' && computer === 'scissors') ||
      (choice === 'scissors' && computer === 'paper') ||
      (choice === 'paper' && computer === 'rock')) {
        setWinner('You win this round!');
        newRoundsWons += 1;
        setRoundsPlayed(prev => prev + 1);

    } else {
        setWinner('You lose this round!');
        newRoundsLost += 1;
        setRoundsPlayed(prev => prev + 1);

    }
    // Update state for rounds won and lost
    setRoundsWons(newRoundsWons);
    setRoundsLost(newRoundsLost);

    // Check for game over after updating rounds
    checkGameOver(newRoundsWons, newRoundsLost);

  }

  /**
   * Check Game Over
   * 
   * This function checks if the game is over and updates the game state accordingly.
   * 
   * @param {number} roundsWons - The number of rounds won by the player.
   * @param {number} roundsLost - The number of rounds lost by the player.
  */
  const checkGameOver = (roundsWons: number,roundsLost: number) => {
    if (roundsWons === 2) {
      setMessage("You are the winner of this best of 3! Gg!");
      setPlayerWins(prev => prev + 1);
      setGamesPlayed(prev => prev + 1);

      // Update player's stats after checking game over
      updatePlayersStats(username, 1, 0);
      
    } else if (roundsLost === 2) {
      setMessage("The computer is the winner of this best of 3! Try again!");
      setComputerWins(prev => prev + 1);
      setGamesPlayed(prev => prev + 1);

      // Update player's stats after checking game over
      updatePlayersStats(username, 0, 1);
    }

  }

  /**
   * Update the player's stats
   * 
   * @param {string} username
   */
  async function updatePlayersStats(username: string, wins: number, loss: number) {
    const playerData = await fetchPlayerData(username); 
    
    const updatedGamesPlayed = playerData.games + 1 ;
    const updatedWins = playerData.win + wins ;
    const updatedLoss = playerData.loss + loss ;
    const updatedRatio = (updatedWins/updatedLoss).toFixed(2) ;

    const response = await fetch('http://localhost:4000/players/' + playerData.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: playerData.id,
          username: playerData.username,
          games: updatedGamesPlayed ,
          win: updatedWins ,
          loss: updatedLoss ,
          ratio: updatedRatio
        })
    });
    const jsonResponse = await response.json();
    console.log('Player\'s stats updated');
    console.log(jsonResponse);
  }

  /**
   * Reset Game
   * 
   * This function resets the game state to its initial values.
  */
  const resetGame = () => {
    setRoundsLost(0);
    setRoundsWons(0);
    setRoundsPlayed(0);
    setPlayerChoice('Your choice');
    setComputerChoice('Computer\'s choice');
    setWinner('');
    setMessage('');
  }
    
  return(
    <div className="my-3 text-center">
      <h2 className="text-center text-2xl my-2 underline underline-offset-2 ">Now let&apos;s play</h2>
      <p>You are playing as {username}</p>
      <div className="my-2 py-3 px-4 border-2 bg-slate-800 text-neutral-100 border-amber-500 rounded-3xl">
        <div className="flex justify-evenly my-2">
          <button 
            onClick={() => { playGame('rock'); }}>
              Rock
          </button>
          <button 
            onClick={() => { playGame('paper'); }}>
              Paper
          </button>
          <button 
            onClick={() => { playGame('scissors'); }}>
              Scissors
          </button>
        </div>
        <div>
          <p className="capitalize"> 
            <span className="text-neutral-200 font-bold">{playerChoice} </span> 
            VS
            <span className="text-amber-500 font-bold"> {computerChoice}</span>
          </p>
          <p className="text-amber-800 underline">{winner}</p>
          <p>
            <span className="text-neutral-200 font-bold">Rounds won {roundsWons}</span>
            - 
            <span className="text-amber-500 font-bold">{roundsLost} Rounds lost</span>
          </p>
          <p>Rounds Played: {roundsPlayed}</p>
        </div>
        <div className="my-2">
          <p className="font-bold text-neutral-100">{message}</p>
          <p>Overall games played: {gamesPlayed}</p>
          <p>
            <span className="text-neutral-200 font-bold">Players wins : {playerWins} </span>
            <span className="text-amber-500 font-bold"> Computers wins : {computerWins}</span>
          </p>
        </div>
        <div className="my-2">
          Please 
          <button className="text-black bg-amber-500 border border-slate-800 hover:bg-amber-200 rounded-full px-2 py-1 mx-1" 
          type="button" onClick={() => {resetGame()}}>
            reset
          </button> 
          before playing again!
        </div>
      </div>
    </div>
  );
}
export default Rpc;