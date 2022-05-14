import { Story, Meta } from "@storybook/react";

import {
  ProcessCard,
  ProcessCardProps,
} from "../components/Card/ProcessCard/ProcessCard";

export default {
  title: "Components/Card/ProcessCard",
  component: ProcessCard,
} as Meta;

const Template: Story<ProcessCardProps> = (args) => <ProcessCard {...args} />;

export const BrandsTypes = Template.bind({});
BrandsTypes.args = {
  title: "브랜드를 선택하세요",
  tasteType: [
    {
      id: 1,
      name: "EDIYA COFFEE",
      thumbnail: require("../assets/Icons/brands/ediya.png"),
    },
    {
      id: 2,
      name: "STARBUCKS",
      thumbnail: require("../assets/Icons/brands/starbucks.png"),
    },
    {
      id: 3,
      name: "COFFEE BEEN",
      thumbnail: require("../assets/Icons/brands/coffeebean.png"),
    },
    {
      id: 4,
      name: "TWOSOME PLACE",
      thumbnail: require("../assets/Icons/brands/twosome.png"),
    },
    {
      id: 5,
      name: "HOLLYS COFFEE",
      thumbnail: require("../assets/Icons/brands/hollys.png"),
    },
    {
      id: 6,
      name: "PASCUCCI COFFEE",
      thumbnail: require("../assets/Icons/brands/pascucci.png"),
    },
  ],
};

export const BeansTypes = Template.bind({});
BeansTypes.args = {
  title: "원두 종류를 선택하세요",
  tasteType: [
    {
      id: 1,
      name: "콜롬비아 수프리모",
      thumbnail: require("../assets/Icons/beans/colombiaSupremo.png"),
    },
    {
      id: 2,
      name: "에티오피아 예가체프",
      thumbnail: require("../assets/Icons/beans/ethiopiaYirgacheffee.png"),
    },
    {
      id: 3,
      name: "과테말라 SHB",
      thumbnail: require("../assets/Icons/beans/guatemalaAntiguaSHB.png"),
    },
    {
      id: 4,
      name: "케냐 AA",
      thumbnail: require("../assets/Icons/beans/kenyaAA.png"),
    },
    {
      id: 5,
      name: "탄자니아 AA",
      thumbnail: require("../assets/Icons/beans/tanzaniaAA.png"),
    },
    {
      id: 6,
      name: "자메이카 블루마운틴",
      thumbnail: require("../assets/Icons/beans/jamaicaBlueMountain.png"),
    },
  ],
};

export const TemperatureTypes = Template.bind({});
TemperatureTypes.args = {
  title: "차가운 것과 뜨거운 것",
  tasteType: [
    {
      id: 1,
      name: "쪄.죽.따",
      thumbnail: require("../assets/Icons/temperature/hot.png"),
    },
    {
      id: 2,
      name: "반.반",
      thumbnail: require("../assets/Icons/temperature/half.png"),
    },
    {
      id: 3,
      name: "얼.죽.아",
      thumbnail: require("../assets/Icons/temperature/ice.png"),
    },
  ],
};

export const CoffeeTypes = Template.bind({});
CoffeeTypes.args = {
  title: "좋아하는 커피 종류를 선택해주세요.",
  tasteType: [
    {
      id: 1,
      name: "아메리카노",
      thumbnail: require("../assets/Icons/coffeetypes/americano.png"),
    },
    {
      id: 2,
      name: "카페라떼",
      thumbnail: require("../assets/Icons/coffeetypes/caffelatte.png"),
    },
    {
      id: 3,
      name: "에스프레소",
      thumbnail: require("../assets/Icons/coffeetypes/espresso.png"),
    },
    {
      id: 4,
      name: "카페모카",
      thumbnail: require("../assets/Icons/coffeetypes/caffemocha.png"),
    },
    {
      id: 5,
      name: "카푸치노",
      thumbnail: require("../assets/Icons/coffeetypes/cappuccino.png"),
    },
    {
      id: 6,
      name: "마끼아또",
      thumbnail: require("../assets/Icons/coffeetypes/macchiato.png"),
    },
  ],
};

export const BottleTypes = Template.bind({});
BottleTypes.args = {
  title: "컵은 어떤 것을 사용하시나요?",
  tasteType: [
    {
      id: 1,
      name: "텀블러",
      thumbnail: require("../assets/Icons/bottles/cup-tumbler.png"),
    },
    {
      id: 2,
      name: "테이크 아웃(뜨)",
      thumbnail: require("../assets/Icons/bottles/cup-takeout-hot.png"),
    },
    {
      id: 3,
      name: "테이크 아웃(아)",
      thumbnail: require("../assets/Icons/bottles/cup-disposable.png"),
    },
    {
      id: 4,
      name: "머그 컵",
      thumbnail: require("../assets/Icons/bottles/cup-mug.png"),
    },
    {
      id: 5,
      name: "재사용 컵",
      thumbnail: require("../assets/Icons/bottles/cup-reuseable.png"),
    },
    {
      id: 6,
      name: "찻 잔",
      thumbnail: require("../assets/Icons/bottles/cup-tea.png"),
    },
  ],
};
