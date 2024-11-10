import { ReactNode, useEffect } from "react";
import "./GamePadButton.css";

export interface GamePadButtonProps {
  label: ReactNode;
  id: string;
  onClick: () => void;
  position: {
    right?: number;
    bottom?: number;
    left?: number;
    top?: number;
  };
  keyboardKey?: string;
  disabled: boolean;
  registerHold: () => void;
  unregisterHold: () => void;
  zIndex: number;
}
export const GamePadButton = ({
  label,

  position,
  disabled,
  registerHold,
  unregisterHold,
  onClick,
  zIndex,
}: GamePadButtonProps) => {
  useEffect(() => {});
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onMouseDown={registerHold}
      onMouseUp={unregisterHold}
      onMouseLeave={unregisterHold}
      onTouchStart={registerHold}
      onTouchEnd={unregisterHold}
      onTouchCancel={unregisterHold}
      className="gamePadButton"
      style={{ position: "absolute", ...position, zIndex }}
    >
      {label}
    </button>
  );
};
