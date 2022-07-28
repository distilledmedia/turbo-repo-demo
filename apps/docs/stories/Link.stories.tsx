import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from 'ui';

export default {
  title: 'Atoms/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>Link</Link>
);

export const LinkExample = Template.bind({});
LinkExample.args = {
  href: '/',
};
