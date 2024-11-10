import type { Meta } from "@storybook/react";
import { GamePadButton } from "./GamePadButton";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof GamePadButton> = {
  component: GamePadButton,
};

export default meta;

export const Standard = {
  render: () => {
    return (
      <GamePadButton
        label={"A"}
        unregisterHold={() => {}}
        registerHold={() => {}}
        onClick={() => console.log("clicky")}
        position={{
          right: undefined,
          bottom: 0,
          left: 0,
          top: undefined,
        }}
        id={"A"}
        disabled={false}
        zIndex={1}
      />
    );
  },
};
