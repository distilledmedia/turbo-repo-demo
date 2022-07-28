import React from 'react';
import { theme } from 'ui/styles/theme.config';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Panel1, ButtonTypes, ButtonSizes, TextSize } from 'ui';
import House from './assets/house.svg';
import House2 from './assets/house2.svg';

export default {
  title: 'Molecules/Panel1',
  component: Panel1,
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
} as ComponentMeta<typeof Panel1>;

const Template: ComponentStory<typeof Panel1> = (args) => (
  <div style={{ background: '#E5E5E5', padding: '40px', width: '362px' }}>
    <Panel1 {...args} />
  </div>
);

export const Panel1Example = Template.bind({});
Panel1Example.args = {
  text: 'Enjoy the widest reach for property ads in Ireland on Daft.',
  textSize: TextSize.S16,
  buttonText: 'ADD A NEW PROPERTY',
  buttonType: ButtonTypes.SECONDARY,
  buttonSize: ButtonSizes.MEDIUM,
  href: '/',
  imgAlt: 'Get the most from your ads. Stay updated on how they do.',
  imgUrl: House,
  imgWidth: 100,
  imgHeight: 88,
  bgColor: 'WHITE',
};

export const Panel1Example2 = Template.bind({});
Panel1Example2.args = {
  text: 'Get the most from your ads. Stay updated on how they do.',
  textSize: TextSize.S16,
  buttonText: 'MANAGE YOUR ADS',
  buttonType: ButtonTypes.SECONDARY,
  buttonSize: ButtonSizes.MEDIUM,
  href: '/',
  imgAlt: 'Get the most from your ads. Stay updated on how they do.',
  imgUrl: House2,
  imgWidth: 100,
  imgHeight: 88,
  bgColor: 'WHITE',
};
