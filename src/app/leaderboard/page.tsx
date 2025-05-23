"use client";
import Table from "@/lib/components/leaderboard/leaderboard-table";
import React from "react";
import { useLeaderboard } from "@/lib/hooks/useLeaderboard";
import { Text } from "@/lib/components/common/text";

export default function LeaderboardPage() {
  const { topPlayers } = useLeaderboard();

  return (
    <section className="container my-3">
      <div className="container mt-4 text-center">
        <Text variant="h1" color="primary">
          Leaderboard
        </Text>
        <Text variant="caption" color="secondary">
          Here lies the champions of this game
        </Text>
      </div>
      <div className="flex justify-center">
        <Table players={topPlayers} />
      </div>
    </section>
  );
}
