"use client";
import Table from "@/lib/components/leaderboard/leaderboard-table";
import React from "react";
import { useLeaderboard } from "@/lib/hooks/useLeaderboard";

const LeaderboardPage: React.FC = () => {
  const { topPlayers } = useLeaderboard();

  return (
    <section className="container my-3">
      <div className="container mt-4 text-center">
        <h1 className="text-4xl text-slate-800">Leaderboard</h1>
        <span className="text-sm text-black">
          Here lies the champions of this game
        </span>
      </div>
      <div className="flex justify-center">
        <Table players={topPlayers} />
      </div>
    </section>
  );
};

export default LeaderboardPage;
