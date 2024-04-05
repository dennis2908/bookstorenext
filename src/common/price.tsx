import { twMerge } from 'tailwind-merge';
import type { Maybe } from './common-types';

type PriceProps = {
  className?: string;
  value: Maybe<number>;
};

const priceFormatter = new Intl.NumberFormat('de-DE');

export function Price({ className, value }: PriceProps) {
  return (
    <span className={twMerge('font-semibold', className)}>
      {priceFormatter.format(value ?? 0)}
    </span>
  );
}
