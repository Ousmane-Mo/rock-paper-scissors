export interface Player {
  username: string;
  games: number;
  win: number;
  loss: number;
  ratio: string;
}

export interface PlayerResponse extends Player {
  id: string;
}

export interface CreatePlayerDto {
  username: string;
}

export interface UpdatePlayerStatsDto {
  games: number;
  win: number;
  loss: number;
  ratio: string;
}
