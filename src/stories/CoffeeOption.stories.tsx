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
  bgCircleActive: require("../assets/images/bg-circle-active.png"),
  optionIcons: {
    brandIcon: require("../assets/Icons/brand.png"),
    beanIcon: require("../assets/Icons/beans.png"),
    cupIcon: require("../assets/Icons/coffee.png"),
    syrupIcon: require("../assets/Icons/syrup.png"),
    dayTimeIcon: require("../assets/Icons/morning-big.png"),
    temperatureIcon: require("../assets/Icons/ice-big.png"),
  },
};

export const brandIcon = Template.bind({});
brandIcon.args = {
  ...Default.args,
  name: "brand",
};

export const beanIcon = Template.bind({});
beanIcon.args = {
  ...Default.args,
  name: "bean",
};

export const cupIcon = Template.bind({});
cupIcon.args = {
  ...Default.args,
  name: "cup",
};

export const syrupIcon = Template.bind({});
syrupIcon.args = {
  ...Default.args,
  name: "syrup",
};

export const dayTimeIcon = Template.bind({});
dayTimeIcon.args = {
  ...Default.args,
  name: "dayTime",
};

export const temperatureIcon = Template.bind({});
temperatureIcon.args = {
  ...Default.args,
  name: "temperature",
};
