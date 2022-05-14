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
  bgCard: require("../assets/Images/bg-card.png"),
  bgDigram: require("../assets/Images/bg-digram.png"),
  brand: {
    name: "Coffee Bean",
    description: "커피빈 브랜드가 좋아요",
  },
  beans: {
    name: "예가체프 AA",
    description: "적절한 산미가 깔끔한 맛의 예가체프가 AA가 내 취향~",
  },
  coffee: {
    name: "아메리카노",
    description: "난 아메리카노 중독자 입니다",
  },
  bottle: {
    name: "텀블러",
    description: "내 취향을 담은 텀블러",
    thumbnail: require("../assets/Icons/bottles/cup-tea.png"),
  },
  temperature: {
    name: "얼.죽.아",
    description: "겨울에도 차가운 아이스 커피 못 잃어",
  },
};
