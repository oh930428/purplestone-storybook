import { Story, Meta } from "@storybook/react";
import {
  CoffeeOption,
  CoffeeOptionProps,
} from "../components/CoffeeOption/CoffeeOption";

export default {
  title: "COMPONENTS/CoffeeOption",
  component: CoffeeOption,
} as Meta;

const Template: Story<CoffeeOptionProps> = (args) => <CoffeeOption {...args} />;

export const Default = Template.bind({});
Default.args = {
  bgCircle: require("../assets/images/bg-circle.png"),
  thumbnail: [
    {
      id: 1,
      name: "brand",
      image: require("../assets/Icons/starbucks.png"),
    },
  ],
};

export const selected = Template.bind({});
selected.args = {
  ...Default.args,
  bgCircleActive: require("../assets/images/bg-circle-active.png"),
  isSelected: true,
};
