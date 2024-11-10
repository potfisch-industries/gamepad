import type { Meta } from "@storybook/react";
import { useState } from "react";
import { GamePad } from "./GamePad";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof GamePad> = {
  component: GamePad,
};

export default meta;

export const Standard = {
  render: () => {
    const [keyLog, setKeyLog] = useState<string[]>([]);
    return (
      <div style={{ backgroundColor: "grey", height: "100vh" }}>
        <GamePad
          buttons={[
            {
              id: "a",
              label: "A",
              position: { right: 20, bottom: 20 },
              onClick: () => setKeyLog([...keyLog, "a"]),
              keyboardKey: "a",
              disabled: false,
            },
            {
              id: "b",
              label: "B",
              position: { right: 80, bottom: 20 },
              onClick: () => setKeyLog([...keyLog, "b"]),
              keyboardKey: "b",
              disabled: false,
            },
          ]}
          framerate={20}
          zIndex={1}
        >
          <div> Da Game: {keyLog.map((k) => k)}</div>
        </GamePad>
      </div>
    );
  },
};
