'use client';

import { SubmitButton } from '@/forms/submit-button';
import type { Product } from '@/products/product-types';
import { storeLogin } from '../redux/store-login';
import { addProductToCart } from './cart-actions';

type AddProductToCartButtonProps = {
  className?: string;
  product: Product;
};

export function AddProductToCartButton({
  product,
}: AddProductToCartButtonProps) {
  const addProductToCartWithId = addProductToCart.bind(null, product.id);
  let disabled = true;
  if (storeLogin.getState().payload.authFullName) disabled = false;
  return (
    <form action={addProductToCartWithId} className="w-full max-w-xs">
      <SubmitButton variant="primary" className="w-full" isDisabled={disabled}>
        Add to Cart
      </SubmitButton>
    </form>
  );
}
