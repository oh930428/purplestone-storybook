import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "../components/Button/Button";

export default {
  title: "COMPONENTS/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const medium = Template.bind({});
medium.args = {
  size: "medium",
  label: "저장하기",
};

export const large = Template.bind({});
large.args = {
  size: "large",
  label: "취향 카드 만들기",
};
