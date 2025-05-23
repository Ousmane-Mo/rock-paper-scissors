import { useState, useEffect } from "react";
import { Player } from "@/lib/types/game";

export const useLeaderboard = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/players`)
      .then((response) => response.json())
      .then((data) => {
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

  const topPlayers = players.slice(0, 10);

  return {
    topPlayers,
  };
};
