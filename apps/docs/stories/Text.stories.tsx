import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { theme } from 'ui/styles/theme.config';
import { Text } from 'ui';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    variant: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
      control: { type: 'select' },
    },
    size: {
      options: Object.keys(theme.fontSize),
      control: { type: 'select' },
    },
    textColor: {
      options: Object.keys(theme.color),
      control: { type: 'select' },
    },
    fontWeight: {
      options: Object.keys(theme.fontWeight),
      control: { type: 'select' },
    },
    as: {
      control: false,
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>Text</Text>
);

export const TextExample = Template.bind({});
TextExample.args = {
  variant: 'p',
};
