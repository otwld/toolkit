import {
  Directive,
  effect,
  HostBinding,
  input,
  InputSignal,
} from '@angular/core';
import { tv } from 'tailwind-variants';

const CARD_THEME = tv({
  base: 'block max-w-sm border border-gray-200 rounded-lg shadow',
  variants: {
    color: {
      default:
        'bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700',
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-purple-500 text-white',
    },
    size: {
      sm: 'text-sm',
      md: 'p-6 text-base',
      lg: 'px-4 py-3 text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
  },
});

export type CardVariants = {
  [k in keyof (typeof CARD_THEME)['variants']]: InputSignal<
    keyof (typeof CARD_THEME)['variants'][k]
  >;
};

@Directive({
  selector: '[kitCard]',
  standalone: true,
})
export class CardDirective implements CardVariants {
  @HostBinding('class') private hostClass = CARD_THEME();
  private readonly cssEffect = effect(() => {
    this.hostClass = CARD_THEME({
      size: this.size(),
      color: this.color(),
    });

    console.info(this.color(), this.size());
  });

  /**
   * The size of the card.
   */
  public readonly size = input(CARD_THEME.defaultVariants.size || 'md');
  /**
   * The color of the card.
   */
  public readonly color = input(CARD_THEME.defaultVariants.color || 'primary');
}
