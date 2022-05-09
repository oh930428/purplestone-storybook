import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navigation from "../components/Navigation/Navigation";

export default {
  title: "COMPONENTS/Navigation",
  component: Navigation,
  argTypes: {},
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation />;

export const Default = Template.bind({});
Default.args = {};
