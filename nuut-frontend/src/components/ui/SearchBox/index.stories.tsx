import type { StoryObj, Meta } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { SearchBox } from ".";

type T = typeof SearchBox;
type Story = StoryObj<T>;

export default {
  title: "SearchBox",
  component: SearchBox,
  argTypes: {},
} as Meta<T>;

export const Default: Story = {};

export const WithError: Story = {
  play: async ({ canvasElement }) => {
    const { getByRole } = within(canvasElement);
    await userEvent.click(getByRole("button"));
    await userEvent.tab();
    await userEvent.tab();
  },
};
