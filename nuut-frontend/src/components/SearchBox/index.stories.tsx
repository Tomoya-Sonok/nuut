import type { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { SearchBox } from ".";

type T = typeof SearchBox;
type Story = ComponentStoryObj<T>;

export default {
  title: "SearchBox",
  component: SearchBox,
} as ComponentMeta<T>;

export const Default: Story = {};
