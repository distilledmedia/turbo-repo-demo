import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonTypes, ButtonSizes } from 'ui';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    iconComponent: {
      control: false,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonXS = Template.bind({});
ButtonXS.args = {
  buttonText: 'Extra Small',
  buttonType: ButtonTypes.PRIMARY,
  buttonSize: ButtonSizes.X_SMALL,
};

export const ButtonSmall = Template.bind({});
ButtonSmall.args = {
  buttonText: 'Small',
  buttonType: ButtonTypes.PRIMARY,
  buttonSize: ButtonSizes.SMALL,
};

export const ButtonMedium = Template.bind({});
ButtonMedium.args = {
  buttonText: 'MEDIUM',
  buttonType: ButtonTypes.PRIMARY,
  buttonSize: ButtonSizes.MEDIUM,
};

export const ButtonLarge = Template.bind({});
ButtonLarge.args = {
  buttonText: 'LARGE',
  buttonType: ButtonTypes.PRIMARY,
  buttonSize: ButtonSizes.LARGE,
};

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  buttonText: 'PRIMARY',
  buttonType: ButtonTypes.PRIMARY,
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  buttonText: 'SECONDARY',
  buttonType: ButtonTypes.SECONDARY,
};

export const ButtonTertiary = Template.bind({});
ButtonTertiary.args = {
  buttonText: 'TERTIARY',
  buttonType: ButtonTypes.TERTIARY,
};

export const ButtonGhost = Template.bind({});
ButtonGhost.args = {
  buttonText: 'GHOST',
  buttonType: ButtonTypes.GHOST,
};

export const ButtonFullWidth = Template.bind({});
ButtonFullWidth.args = {
  buttonText: 'full Width',
  buttonType: ButtonTypes.PRIMARY,
  fullWidth: true,
};
