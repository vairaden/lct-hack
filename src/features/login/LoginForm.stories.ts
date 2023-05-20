import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Example/Button",
  component: LoginForm,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {};
