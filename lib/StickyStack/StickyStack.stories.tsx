import type { Meta, StoryObj } from "@storybook/react";
import { StickyStack } from "./StickyStack";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof StickyStack> = {
  component: StickyStack,
};

export default meta;
type Story = StoryObj<typeof StickyStack>;

export const Standard: Story = {
  args: {
    stickies: [
      {
        content: (
          <div style={{ height: "200px", backgroundColor: "green" }}>
            Hello, i am not sticky
          </div>
        ),
        id: "helloGreen",
        sticky: false,
      },
      {
        content: (
          <div style={{ height: "100px", backgroundColor: "yellow" }}>
            Hello, i am sticky
          </div>
        ),
        id: "helloYellow",
        sticky: true,
      },
      {
        content: (
          <div style={{ height: "800px", backgroundColor: "red" }}>
            Hello, i am not sticky
          </div>
        ),
        id: "helloRed",
        sticky: false,
      },
      {
        content: (
          <div style={{ height: "100px", backgroundColor: "purple" }}>
            Hello, i am sticky
          </div>
        ),
        id: "helloPurple",
        sticky: true,
      },
      {
        content: (
          <div style={{ height: "100px", backgroundColor: "blue" }}>
            Hello, i am sticky
          </div>
        ),
        id: "helloBlue",
        sticky: true,
      },
      {
        content: (
          <div style={{ height: "600px", backgroundColor: "orange" }}>
            Hello, i am not sticky
          </div>
        ),
        id: "helloOrange",
        sticky: false,
      },

      {
        content: (
          <div style={{ height: "600px", backgroundColor: "brown" }}>
            Hello, i am not sticky
          </div>
        ),
        id: "helloBrown",
        sticky: false,
      },
    ],
  },
};
