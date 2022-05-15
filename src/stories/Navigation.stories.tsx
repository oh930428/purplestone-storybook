import { Story, Meta } from '@storybook/react';
import Navigation from '../components/Navigation/Navigation';

export default {
  title: 'Components/Navigation',
  component: Navigation,
} as Meta;

const Template: Story = () => <Navigation />;

export const Default = Template.bind({});
Default.args = {};
