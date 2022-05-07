import { Story, Meta } from "@storybook/react";
import MakeMyCard from "../components/Card/MakeMyCard/MakeMyCard";

export default {
  title: "Components/MakeMyCard",
  component: MakeMyCard,
} as Meta;

const Template: Story = (args) => <MakeMyCard {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div
      style={{
        backgroundImage: `url(${require("../assets/images/bg-card.png")})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Story />
    </div>
  ),
];
