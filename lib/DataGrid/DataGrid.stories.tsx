import type { Meta } from "@storybook/react";
import { Bubble } from "../Bubble/Bubble";
import { StoryBookThemeProvider } from "../ThemeProvider/StoryBookThemeProvider";
import { DataGrid } from "./DataGrid";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof DataGrid> = {
  component: DataGrid,
};

export default meta;

export const Standard = {
  render: () => {
    return (
      <StoryBookThemeProvider>
        <DataGrid
          columnLabels={[
            { content: "Column 1", filters: ["bollocks"] },
            {
              content: (
                <div style={{ textWrap: "nowrap" }}>
                  "Column 2 very extremely absurdly long content that wont wrap"
                </div>
              ),
            },
            { content: "Column 3" },
            { content: "Column 4 very extremely absurdly long content" },
            { content: "Column 5" },
            { content: "Column 6 very extremely absurdly long content" },
            { content: "Column 7" },
            { content: "Column 8" },
            { content: "Column 9" },
            { content: "Column 10" },
          ]}
          rowLabels={[
            { content: "Row 1", filters: ["dangerous"] },
            {
              content: "Row 2 very extremely absurdly long content",
              onClick: () => console.log("Big Dog"),
            },
            {
              content: "Row 3",
            },
            { content: "Row 4" },
          ]}
          rows={[
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
              {
                content: (
                  <Bubble>
                    <div>NANANA</div>
                  </Bubble>
                ),
              },
            ],
          ]}
          filters={["dangerous", "stupid", "bollocks"]}
        />
      </StoryBookThemeProvider>
    );
  },
};
