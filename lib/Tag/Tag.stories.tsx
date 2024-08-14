import type { Meta } from "@storybook/react";
import { StoryBookThemeProvider } from "../ThemeProvider/StoryBookThemeProvider";
import { Tag } from "./Tag";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Tag> = {
  component: Tag,
};

export default meta;

export const Standard = {
  render: () => (
    <StoryBookThemeProvider>
      <>
        <Tag content="Hello" type="FILLED" />
        <Tag content="Goodbye" type="OUTLINED" />
      </>
    </StoryBookThemeProvider>
  ),
};
