import type { StoryObj, Meta } from "@storybook/react";
import { SearchFood } from ".";

type T = typeof SearchFood;
type Story = StoryObj<T>;

export default {
  title: "features/SearchFood",
  component: SearchFood,
  argTypes: {},
  args: {},
} as Meta<T>;

export const Default: Story = {};
