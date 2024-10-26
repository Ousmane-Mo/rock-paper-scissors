"use client"
import Table from '../components/table';
import React, {useState, useEffect} from 'react';
import { Player } from '../page';

const Leaderboard: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/players')
    .then(response => response.json())
    .then(data => {
      const sortedPlayers = data.sort((a: Player, b: Player) => {
        if (b.win != a.win) {
          return b.win - a.win;
        } else {
          return b.games - a.games;
        }
      });
      setPlayers(sortedPlayers);
    });
  }, []);
  const limitedPlayers = players.slice(0, 10);

  return(

    <section className="container  my-3">
      <div className="container mt-4  text-center">
        <h1 className="text-4xl text-slate-800">Leaderboard</h1>
        <span className="text-sm text-black">Here lies the champions of this game</span>
      </div>
      <div className="flex justify-center">
         <Table players={limitedPlayers} />
      </div>
    </section>
  );
};

export default Leaderboard;