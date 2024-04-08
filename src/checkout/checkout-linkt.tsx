import { ButtonLink } from '@/common/button-link';
import { routes } from '@/routing/routing-utils';
import { Suspense } from 'react';
import { getCart } from '../cart/cart-fetchers';

export async function CheckoutLink() {
  const cart = await getCart();

  if (!cart) {
    return null;
  }

  if (cart.totalPrice <= 100) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ButtonLink
          href={routes.checkout({
            query: { order: JSON.stringify(cart) },
          })}
          variant="primary"
          className="w-full"
        >
          Proceed to Checkout
        </ButtonLink>
      </Suspense>
    );
  } else {
    return '';
  }
}
