import { ReactElement, useEffect, useState } from "react";
import {
  GamePadButton,
  GamePadButtonProps,
} from "../GamepadButton/GamePadButton";

export const GamePad = ({
  buttons,
  framerate,
  children,
}: {
  buttons: Omit<GamePadButtonProps, "registerHold" | "unregisterHold">[];
  framerate: number;
  children: ReactElement;
}) => {
  const [heldButtonId, setHeldButtonId] = useState<string | undefined>();

  useEffect(() => {
    const interval = 1000 / framerate;

    const buttonWithThisKey = buttons.find(
      (b) => b.id === heldButtonId && !b.disabled
    );

    const handleHeldKey = () => {
      if (buttonWithThisKey) {
        buttonWithThisKey.onClick();
      }
    };

    const intervalRunner = setInterval(() => handleHeldKey(), interval);

    return () => clearInterval(intervalRunner);
  }, [buttons, framerate, heldButtonId]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const buttonWithThisKey = buttons.find(
        (b) => b.keyboardKey === event.key && !b.disabled
      );
      if (buttonWithThisKey) {
        setHeldButtonId(buttonWithThisKey.id);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [buttons]);

  useEffect(() => {
    const handleKeyUp = () => {
      setHeldButtonId(undefined);
    };
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return (
    <div style={{ userSelect: "none" }}>
      {buttons.map((b, i) => (
        <GamePadButton
          key={i}
          {...b}
          registerHold={() => setHeldButtonId(b.id)}
          unregisterHold={() => setHeldButtonId(undefined)}
        />
      ))}
      {children}
    </div>
  );
};
