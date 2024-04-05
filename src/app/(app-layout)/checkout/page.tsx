'use client';

import { storeLogin } from '../../../redux/store-login';

import axios from 'axios';

import { clearCart } from '@/cart/cart-actions';

import { useEffect } from 'react';

export default function CheckoutPage(context: { params: any }) {
  // useEffect(() => {
  //   const storeCall = async () => {
  //     setformData({
  //       email: storeLogin.getState().payload.authEmail,
  //       fullname: storeLogin.getState().payload.authFullName,
  //       total: JSON.parse(context.searchParams.order).totalPrice,
  //       order: JSON.parse(context.searchParams.order),
  //     });

  //     storeLogin.dispatch({
  //       type: 'CHANGE_STATE',
  //       payload: {
  //         authFullName: '',
  //         authEmail: '',
  //       },
  //     });

  //     await clearCart();
  //   };
  //   storeCall();
  // }, []);

  useEffect(() => {
    console.log(111, context);
    const getData = async () => {
      // await clearCart();

      await axios.post('http://127.0.0.1:8005/book', {
        email: storeLogin.getState().payload.authEmail,
        fullname: storeLogin.getState().payload.authFullName,
        total: JSON.parse(context.params.searchParams.order).totalPrice,
        order: JSON.parse(context.params.searchParams.order),
      });

      // location.href = '/search';
    };

    getData();
  });
}
