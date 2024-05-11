import type { Meta, StoryObj } from "@storybook/react";
import { Organizer } from "./Organizer";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Organizer> = {
  component: Organizer,
};

export default meta;
type Story = StoryObj<typeof Organizer>;

export const FirstStory: Story = {
  args: {
    nameOfOptions: "Pokemon",
    options: [
      { id: "foierjfiro", content: <div>HEllo</div> },
      { id: "foierjfirdewr", content: <div>Bullu</div> },
      { id: "foierjfirtgte", content: <div>Ballu</div> },
    ],
    initialSelected: [],
    selectionMax: 6,
    selectionMin: 1,
    onConfirm: (selected: string[]) => {
      console.log(selected);
    },
    onCancel: () => console.log("abandon"),
  },
};
