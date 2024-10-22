"use client"
import React, {useState, useEffect} from "react";
import Table, {Player} from "./components/table";

export default function Home() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/players')
    .then(response => response.json())
    .then(data => setPlayers(data));
  }, []);

  const limitedPlayers = players.slice(0, 5);
  return (
    <section className="container my-7">
      <div className="container mt-4  text-center">
        <h1 className="text-4xl text-slate-800">Rock Paper Scissors</h1>
        <span className="text-sm text-black">Hello and welcome to my game please enter your username to play or check out the leaderboard</span>
      </div>
      <div className="text-black flex justify-evenly mt-4">
        <div className="py-2">
          <h2 className="text-center text-2xl my-2">Enter your username</h2>
          <input type="text" name="username" className="p-2 my-2 border border-amber-500 rounded-lg" placeholder="Username"></input>
        </div>
        <div className="py-2">
          <h2 className="text-center text-2xl my-2">Leaderboard</h2>
          <Table players={limitedPlayers}/>
          <a className="text-black bg-amber-500 border border-slate-800 hover:bg-amber-200 rounded-full px-5 py-2.5 mb-5" href="/leaderboard">View full Leaderboard</a>
        </div>
      </div>
    </section>
  );
}
