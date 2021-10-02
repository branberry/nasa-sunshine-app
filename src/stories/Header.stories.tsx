import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  decorators: [withDesign],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});

LoggedIn.args = {
  user: {},

};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

LoggedOut.parameters = {
  design: {
    type: 'figma'
  }
}
