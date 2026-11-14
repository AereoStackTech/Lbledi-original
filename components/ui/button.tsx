import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-clay focus-visible:ring-offset-2 focus-visible:ring-offset-parchment-cream disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-terracotta-clay text-white hover:bg-terracotta-deep shadow-xs',
        whatsapp: 'bg-whatsapp text-white hover:bg-whatsapp-hover shadow-xs',
        olive: 'bg-olive-beldi text-white hover:opacity-92 shadow-xs',
        outline:
          'border border-terracotta-clay/25 bg-parchment-cream text-ink-espresso hover:bg-parchment-stone',
        ghost: 'text-ink-espresso hover:bg-parchment-stone',
      },
      size: {
        default: 'min-h-[44px] px-5 py-2.5',
        sm: 'min-h-[40px] px-4 py-2 text-xs',
        lg: 'min-h-[48px] px-6 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
