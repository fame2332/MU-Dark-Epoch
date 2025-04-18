export interface Officer {
  id: number;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export interface Rule {
  id: number;
  title: string;
  description: string | React.ReactNode;
}

export interface RankingPlayer {
  rank: number;
  name: string;
  level: number;
}