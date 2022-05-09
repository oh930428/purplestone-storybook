import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components/Button/Button";

export default {
  title: "COMPONENTS/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  size: "Medium",
  label: "저장하기",
};

export const Large = Template.bind({});
Large.args = {
  size: "Large",
  label: "취향 카드 만들기",
};
