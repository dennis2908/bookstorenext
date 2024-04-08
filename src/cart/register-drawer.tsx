'use client';

import { Button } from '@/common/button';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerTrigger,
} from '@/common/drawer';
import React, { useEffect, useState } from 'react';
import type { IPayload } from '../interface/i-payload';
import { storeLogin } from '../redux/store-login';
import { Register } from './register';

export function RegisterDrawer() {
  const [isClient, setIsClient] = useState('Register');
  const [disabled, setdisabled] = useState(false);

  useEffect(() => {
    function storeCall() {
      const payload = storeLogin.getState().payload as IPayload;
      if (payload.authFullName) {
        setIsClient('You get 100 points');
        setdisabled(true);
      }
    }
    storeCall();
  }, []);
  return (
    <Drawer
      from="right"
      closeOnPathnameChange
      trigger={
        <DrawerTrigger asChild>
          <Button isDisabled={disabled}>{isClient}</Button>
        </DrawerTrigger>
      }
    >
      <DrawerHeader>
        <h2>Register Here</h2>
      </DrawerHeader>
      <DrawerBody className="flex flex-col overflow-auto p-0">
        <Register />
      </DrawerBody>
    </Drawer>
  );
}
