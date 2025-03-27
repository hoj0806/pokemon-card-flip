export interface SelectButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  buttonColor: string;
}

export interface GameTimerProps {
  duration: number;
  setIsTimeOut: React.Dispatch<React.SetStateAction<boolean>>;
}
