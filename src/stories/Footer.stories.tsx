import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from '../components/Footer/Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
Default.args = {};
