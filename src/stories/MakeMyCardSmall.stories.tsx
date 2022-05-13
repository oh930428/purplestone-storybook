import { Story, Meta } from "@storybook/react";

import {
  MakeMyCardSmall,
  MakeMyCardSmallProps,
} from "../components/Card/MakeMyCardSmall/MakeMyCardSmall";

export default {
  title: "Components/Card/MakeMyCardSmall",
  component: MakeMyCardSmall,
} as Meta;

const Template: Story<MakeMyCardSmallProps> = (args) => (
  <MakeMyCardSmall {...args} />
);

export const Default = Template.bind({});
Default.args = {
  bgCard: require("../assets/Images/bg-card-small.png"),
  bgDigram: require("../assets/Images/bg-digram-small.png"),
  userName: "은평구 코알라",
  tasteIcon: {
    brandIcon: require("../assets/Icons/brands/coffeebean.png"),
    beanIcon: require("../assets/Icons/beans/kenyaAA.png"),
    bottleIcon: require("../assets/Icons/bottles/cup-purple.png"),
    coffeeTypeIcon: require("../assets/Icons/temperature/hot.png"),
    temperatureIcon: require("../assets/Icons/temperature/ice.png"),
  },
  tasteDigram: {
    brandName: "Coffee Bean",
    beanName: "예가체프 AA",
    bottleName: "No 시럽",
    coffeeTypeName: "모닝 커피",
    temperature: "얼.죽.아",
  },
};
