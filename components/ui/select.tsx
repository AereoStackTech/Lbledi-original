import * as React from 'react';
import { cn } from '@/lib/utils';

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          'flex min-h-[44px] w-full rounded-lg border border-terracotta-clay/20 bg-parchment-cream px-3.5 py-2.5 text-sm text-ink-espresso transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-clay focus-visible:border-terracotta-clay disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = 'Select';

export { Select };
