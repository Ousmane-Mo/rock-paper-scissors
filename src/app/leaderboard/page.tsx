"use client"
import Table, {Player} from "../components/table";
import React, {useState, useEffect} from 'react';

const Leaderboard: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/players')
    .then(response => response.json())
    .then(data => setPlayers(data));
  }, []);

  return(

    <section className="container  my-3">
      <div className="container mt-4  text-center">
        <h1 className="text-4xl text-slate-800">Leaderboard</h1>
        <span className="text-sm text-black">Here lies the champions of this game</span>
      </div>
      <div className="flex justify-center">
         <Table players={players} />
      </div>
    </section>
  );
};

export default Leaderboard;