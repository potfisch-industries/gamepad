import type { Meta, StoryObj } from "@storybook/react";
import { BiArrowFromRight } from "react-icons/bi";
import { LineWithIcon } from "./LineWithIcon";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof LineWithIcon> = {
  component: LineWithIcon,
};

export default meta;
type Story = StoryObj<typeof LineWithIcon>;

export const Basic: Story = {
  args: {
    text: "NANANANA",
    icon: <BiArrowFromRight size={20} />,
  },
};
