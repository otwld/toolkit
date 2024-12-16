import {
  argsToTemplate,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { CardDirective } from './card.directive';
import { ButtonDirective } from '../button/button.directive';
import { ButtonFilledDirective } from '../button/button-filled.directive';
import { ButtonGradientMonoDirective } from '../button/button-gradient-mono.directive';

const meta: Meta<CardDirective> = {
  component: CardDirective,
  title: 'NgKitCard',
  decorators: [
    moduleMetadata({
      imports: [ButtonDirective, ButtonGradientMonoDirective],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `<div kitCard ${argsToTemplate(args)}>Salut</div>`,
  }),
};
export default meta;

type Story = StoryObj<CardDirective>;

export const Default: Story = {
  args: {
    size: 'lg',
    color: 'secondary',
  },
};

export const WithButton: Story = {
  args: {
    size: 'md',
    color: 'primary',
  },
  render: (args) => ({
    props: args,
    template: `
    <a kitCard ${argsToTemplate(args)}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

      <a appButton gradientMono>
        Read more
</a>
    `,
  }),
};
