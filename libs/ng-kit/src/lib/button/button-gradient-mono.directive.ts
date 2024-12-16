import {
  Directive,
  effect,
  HostBinding,
  inject,
  input,
  InputSignal,
} from '@angular/core';
import { ButtonDirective } from './button.directive';
import { tv } from 'tailwind-variants';

const THEME = tv({
  variants: {
    color: {
      blue: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800',
      green:
        'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800',
    },
  },
  defaultVariants: {
    color: 'blue',
  },
});

export type Variants = {
  [k in keyof (typeof THEME)['variants']]: InputSignal<
    keyof (typeof THEME)['variants'][k]
  >;
};

@Directive({
  selector: '[appButton][gradientMono]',
  standalone: true,
})
export class ButtonGradientMonoDirective implements Variants {
  private readonly button = inject(ButtonDirective);

  @HostBinding('class') private hostClass = THEME();
  private readonly cssEffect = effect(() => {
    this.hostClass = THEME({
      color: this.color(),
    });
  });

  public readonly color = input(THEME.defaultVariants.color || 'blue');
}
