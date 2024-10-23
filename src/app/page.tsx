"use client"
import React, {useState, useEffect} from "react";
import Table, {Player} from "./components/table";
import Rpc from "./game/page";

export default function Home() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [username, setUsername] = useState('');

    // useEffect to fetch players from the server when the component mounts
  useEffect(() => {
    fetch('http://localhost:4000/players')
    .then(response => response.json())
    .then(data => setPlayers(data)); // Update players state with fetched data
  }, []);// Empty dependency array means this runs once on mount

  const limitedPlayers = players.slice(0, 5);

  const addPlayer = async () => {
    const response = await fetch('http://localhost:4000/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        games: 0,
        win: 0,
        loss: 0,
        ratio: 0
      })
    });
    const data = await response.json();
    // Update players state by creating a new array that includes all previous players and the new player
    setPlayers(prevPlayers => [...prevPlayers, data]);
  setUsername('');

  };
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }
  
  return (
    <section className="container my-7">
      <div className="container mt-4  text-center">
        <h1 className="text-4xl text-slate-800">Rock Paper Scissors</h1>
        <span className="text-sm text-black">Hello and welcome to my game please enter your username to play or check out the leaderboard</span>
      </div>
      <div className="text-black flex justify-evenly mt-4">
        <div className="py-2">
          <h2 className="text-center text-2xl my-2">Enter your username</h2>
          <div className="my-3">
            <input 
              type="text" 
              value={username} 
              onChange={handleUsernameChange} 
              className="py-2 px-6 my-2 border border-amber-500 rounded-lg" placeholder="Username"></input>
            <button 
              className="text-black bg-amber-500 border border-slate-800 hover:bg-amber-200 rounded-full px-5 py-2.5 mx-5" 
             onClick={addPlayer}>Play</button>
          </div>
          {Rpc()}
        </div>
        <div className="py-2">
          <h2 className="text-center text-2xl my-2">Leaderboard</h2>
          <Table players={limitedPlayers}/>
          <a 
            className="text-black bg-amber-500 border border-slate-800 hover:bg-amber-200 rounded-full px-5 py-2.5 mb-5" 
            href="/leaderboard">
              View full Leaderboard
          </a>
        </div>
      </div>
    </section>
  );
}
