import { Story, Meta } from '@storybook/react';
import Footer from '../components/Footer/Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

const Template: Story = () => <Footer />;

export const Default = Template.bind({});
Default.args = {};
