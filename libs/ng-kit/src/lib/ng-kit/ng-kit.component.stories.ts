import type { Meta, StoryObj } from '@storybook/angular';
import { NgKitComponent } from './ng-kit.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<NgKitComponent> = {
  component: NgKitComponent,
  title: 'NgKitComponent',
};
export default meta;
type Story = StoryObj<NgKitComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ng-kit works!/gi)).toBeTruthy();
  },
};
