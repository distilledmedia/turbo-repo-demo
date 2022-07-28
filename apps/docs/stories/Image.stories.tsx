import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Img } from 'ui';

export default {
  title: 'Atoms/Image',
  component: Img,
} as ComponentMeta<typeof Img>;

const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />;

export const ImageExample = Template.bind({});
ImageExample.args = {
  alt: 'Image alt',
  src: 'https://hermes.daft.ie/dsch-daft-frontend/0.1.1798/static/images/backgrounds/homepage-hero-buy-desktop.jpg',
  width: 1500,
  height: 1500,
};
