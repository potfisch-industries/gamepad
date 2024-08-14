import type { Meta } from "@storybook/react";

import { useState } from "react";
import { StoryBookThemeProvider } from "../ThemeProvider/StoryBookThemeProvider";
import { FilterBar } from "./FilterBar";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof FilterBar> = {
  component: FilterBar,
};

export default meta;

export const Standard = {
  render: () => {
    const [selectedFilter, setSelectedFilter] = useState<string>("green");
    return (
      <StoryBookThemeProvider>
        <FilterBar
          selectedFilter={selectedFilter}
          onChange={setSelectedFilter}
          filters={["green", "fish", "aggregate"]}
        />
      </StoryBookThemeProvider>
    );
  },
};
