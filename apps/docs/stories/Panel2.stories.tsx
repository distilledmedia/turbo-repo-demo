import React from 'react';
import { theme } from 'ui/styles/theme.config';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Panel2, LabelType, TextSize, TextFontWeight } from 'ui';

export default {
  title: 'Molecules/Panel2',
  component: Panel2,
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
} as ComponentMeta<typeof Panel2>;

const Template: ComponentStory<typeof Panel2> = (args) => (
  <div style={{ background: '#E5E5E5', padding: '40px', width: '444px' }}>
    <Panel2 {...args} />
  </div>
);

export const Panel2Example = Template.bind({});
Panel2Example.args = {
  heading: 'Subscription Discount',
  text: 'Last month 17 agents paid €0 monthly subscription charge',
  textSize: TextSize.P14,
  textFontWeight: TextFontWeight.REGULAR,
  headingSize: TextSize.P16,
  href: '/',
  labelText: 'NOT ENABLED',
  labelType: LabelType.alert,
};
