import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label, LabelType } from 'ui';

export default {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    iconComponent: {
      control: false,
    },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const LabelExample = Template.bind({});
LabelExample.args = {
  labelText: 'Label',
  labelType: LabelType.secondary,
  labelSize: 'small',
};
