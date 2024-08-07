import type { Meta, StoryObj } from "@storybook/react";
import { DataGrid } from "./DataGrid";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof DataGrid> = {
  component: DataGrid,
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

export const Standard: Story = {
  args: {
    //👇 The args you need here will depend on your component

    columnLabels: [
      { content: "Column 1", filters: ["bollocks"] },
      { content: "Column 2" },
      { content: "Column 3" },
      { content: "Column 4" },
      { content: "Column 5" },
      { content: "Column 6" },
      { content: "Column 7" },
      { content: "Column 8" },
      { content: "Column 9" },
      { content: "Column 10" },
    ],
    rowLabels: [
      { content: "Row 1", filters: ["dangerous"] },
      { content: "Row 2", onClick: () => console.log("Big Dog") },
      { content: "Row 3" },
      { content: "Row 4" },
    ],
    rows: [
      [
        { content: "YBub", filters: ["stupid", "dangerous"] },
        undefined,
        { content: "Yaya", filters: ["stupid"] },
      ],
      [
        undefined,
        undefined,
        { content: "Nununu", filters: ["dangerous"] },
        undefined,
      ],
      [
        { content: "Neeee", filters: ["bollocks"] },
        undefined,
        undefined,
        undefined,
      ],
    ],
    filters: ["dangerous", "stupid", "bollocks"],
  },
};
