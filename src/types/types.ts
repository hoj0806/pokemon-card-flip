export interface SelectButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  buttonColor: string;
}

export interface GameTimerProps {
  duration: number;
  setIsTimeOut: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ScoreProps {
  children: React.ReactNode;
  text: string;
}

export interface GameCardProps {
  isFliped: boolean;
  pokemonName: string;
  imageUrl: string;
  uniqueId: string;
  isCorrect: boolean;
  type: string;
  handleCardClick: (uniqueId: string, pokemonName: string) => void;
}

export interface GameEndPros {
  isWin: boolean;
}
