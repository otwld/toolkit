import {
  Directive,
  effect,
  HostBinding,
  input,
  InputSignal,
} from '@angular/core';
import { tv } from 'tailwind-variants';

const BUTTON_THEME = tv({
  base: 'font-medium text-sm px-5 py-2.5 me-2 mb-2',
  variants: {
    shape: {
      square: 'rounded-lg',
      rounded: 'rounded-full',
    },
  },
  defaultVariants: {
    shape: 'square',
  },
});

export type ButtonVariants = {
  [k in keyof (typeof BUTTON_THEME)['variants']]: InputSignal<
    keyof (typeof BUTTON_THEME)['variants'][k]
  >;
};

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective implements ButtonVariants {
  @HostBinding('class') private hostClass = BUTTON_THEME();
  private readonly cssEffect = effect(() => {
    this.hostClass = BUTTON_THEME({
      shape: this.shape(),
    });
  });

  public readonly shape = input(BUTTON_THEME.defaultVariants.shape || 'square');
}
