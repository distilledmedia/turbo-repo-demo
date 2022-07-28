import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from 'ui';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    iconComponent: {
      control: false,
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>1</Badge>
);

export const BadgeExample = Template.bind({});
BadgeExample.args = {
  backgroundColor: '#4170c4',
  textColor: '#ffffff',
};
