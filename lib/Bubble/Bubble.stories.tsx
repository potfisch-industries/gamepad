import type { Meta, StoryObj } from "@storybook/react";
import { Bubble } from "./Bubble";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Bubble> = {
  component: Bubble,
};

export default meta;
type Story = StoryObj<typeof Bubble>;

export const Standard: Story = {
  args: {
    children: <span>Hello, i am a Bubble</span>,
    //👇 The args you need here will depend on your component
  },
};
