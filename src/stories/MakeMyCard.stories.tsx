import { Story, Meta } from "@storybook/react";
import MakeMyCard from "../components/Card/MakeMyCard/MakeMyCard";
import { IMakeMyCard } from "../types/makeMyCard.type";

export default {
  title: "Components/Card/MakeMyCard",
  component: MakeMyCard,
} as Meta;

const Template: Story<IMakeMyCard> = (args) => <MakeMyCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  bgCard: require("../assets/Images/bg-card-small.png"),
  bgDigram: require("../assets/Images/bg-digram.png"),
  brand: {
    name: "Coffee Bean",
    description: "커피빈 브랜드가 좋아요",
    thumbnail: require("../assets/Icons/brands/coffeebean.png"),
  },
  temperature: {
    name: "얼.죽.아",
    description: "겨울에도 차가운 아이스 커피 못 잃어",
    thumbnail: require("../assets/Icons/temperature/ice.png"),
  },
  beans: {
    name: "예가체프 AA",
    description: "적절한 산미가 깔끔한 맛의 예가체프가 AA가 내 취향~",
  },
  coffeeType: {
    name: "아메리카노",
    description: "난 아메리카노 중독자 입니다",
    thumbnail: require("../assets/Icons/temperature/hot.png"),
  },
  syrup: {
    name: "No 시럽",
    description: "커피는 오리지널의 맛을 즐겨야죠",
  },
};
