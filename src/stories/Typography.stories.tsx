import { Story, Meta } from '@storybook/react';
import Typography from '../components/Typography/Typography';

export default {
  title: 'Design System/Typography',
  component: Typography,
} as Meta;

const Template: Story = (args) => {
  return <Typography {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
