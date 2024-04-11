'use client';

import { storeLogin } from '../../../redux/store-login';

import axios from 'axios';

import { clearCart } from '@/cart/cart-actions';

import type { IPayload } from '../../../interface/i-payload';

import type { CartDetails } from '@/cart/cart-types';

// import { useEffect } from 'react';

interface Icontext {
  searchParams: IOrder;
}

interface IOrder {
  order: string;
}

export default function CheckoutPage(context: Icontext) {
  interface postData {
    email: string;
    fullname: string;
    total?: number;
    order: string;
  }
  type IState = {
    payload: IPayload;
  };

  const payload = storeLogin.getState() as IState;

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

  // useEffect(() => {
  //   // console.log(111, context);

  //   const getData = async (Data: postData) => {
  //     await axios.post('http://127.0.0.1:8005/book', Data);

  //     storeLogin.dispatch({
  //       type: 'CHANGE_STATE',
  //       payload: {
  //         authFullName: '',
  //         authEmail: '',
  //       },
  //     });

  //     await clearCart();

  //     location.href = '/search';
  //   };

  //   const DataPost: postData = {
  //     email: payload.payload.authEmail,
  //     fullname: payload.payload.authFullName,
  //     order: context.params.searchParams.cartItems,
  //     total: context.params.searchParams.totalPrice,
  //   };

  //   getData(DataPost);
  // }, [context, payload]);

  const getData = async (Data: postData) => {
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    await axios
      .post('https://bookstorenest.vercel.app/book/', Data, { headers })
      .then(() => {
        storeLogin.dispatch({
          type: 'CHANGE_STATE',
          payload: {
            authFullName: '',
            authEmail: '',
          },
        });
      });

    await clearCart();
  };
  // console.log(2222, JSON.parse(context.searchParams.order).totalPrice);

  const dataOrder = JSON.parse(context.searchParams.order) as CartDetails;
  const DataPost: postData = {
    email: payload.payload.authEmail,
    fullname: payload.payload.authFullName,
    order: context.searchParams.order,
    total: dataOrder.totalPrice,
  };

  getData(DataPost)
    .then(() => {
      location.href = '/search';
    })
    .catch((error: unknown) => {
      return error;
    });
}
