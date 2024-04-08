import { ButtonLink } from '@/common/button-link';
import { CheckOutlinedIcon } from '@/common/icons';
import { routes } from '@/routing/routing-utils';
import { Suspense } from 'react';

export function CheckoutSuccessMessage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid place-items-center gap-4 text-success-main">
        <CheckOutlinedIcon size={80} />
        <div className="text-center text-2xl font-semibold">
          Your order has been received
        </div>
        <ButtonLink href={routes.search()}>Back to Store</ButtonLink>
      </div>
    </Suspense>
  );
}
