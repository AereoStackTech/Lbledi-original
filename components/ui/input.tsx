import * as React from 'react';
import { cn } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex min-h-[44px] w-full rounded-lg border border-terracotta-clay/20 bg-parchment-cream px-3.5 py-2.5 text-sm text-ink-espresso placeholder:text-ink-muted/65 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-clay focus-visible:border-terracotta-clay disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
