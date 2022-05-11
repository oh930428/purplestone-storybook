import { Story, Meta } from '@storybook/react';
import Font from '../components/Font/Font';

export default {
  title: 'Design Systems/Font',
  component: Font,
} as Meta;

const Template: Story = (args) => {
  return <Font {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
