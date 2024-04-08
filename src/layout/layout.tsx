'use client';

import { APP_TITLE } from '@/common/common-utils';
import { Container } from '@/common/container';
import { NextLink } from '@/routing/next-link';
import { twMerge } from 'tailwind-merge';
import { BackToTopButton } from './back-to-top-button';

import { clearCart } from '@/cart/cart-actions';

import React, { useEffect, useState } from 'react';

import { storeLogin } from '../redux/store-login';

import { CapitalizeFirstLetter } from '../genFunctions/capitalize-first-letter';

import type { IPayload } from '../interface/i-payload';

type LayoutProps = React.PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="grid min-h-screen grid-rows-[1fr_auto]">{children}</div>
      <BackToTopButton />
    </>
  );
}

type LayoutHeaderProps = React.PropsWithChildren;

export function LayoutHeader({ children }: LayoutHeaderProps) {
  const [isClient, setIsClient] = useState(APP_TITLE);

  useEffect(() => {
    function storeCall() {
      const payload = storeLogin.getState().payload as IPayload;
      if (payload.authFullName) {
        const name = CapitalizeFirstLetter(payload.authFullName) as string;
        setIsClient(`Welcome, ${name}`);
      }
    }
    storeCall();
  }, []);
  async function logout() {
    storeLogin.dispatch({
      type: 'CHANGE_STATE',
      payload: {
        authFullName: '',
        authEmail: '',
      },
    });
    await clearCart();
    location.href = '/';
  }
  return (
    <header className="fixed z-10 h-app-header w-full bg-background-main shadow-sm">
      <Container
        maxWidth="xl"
        className="flex h-full items-center justify-between px-4"
      >
        <NextLink
          href="/"
          onClick={logout}
          className="text-2xl font-bold text-primary-main"
        >
          {isClient}
        </NextLink>
        {children}
      </Container>
    </header>
  );
}

type LayoutContentProps = React.PropsWithChildren<{
  className?: string;
}>;

export function LayoutContent({ className, children }: LayoutContentProps) {
  return (
    <Container
      maxWidth="xl"
      className={twMerge('mt-app-header py-2 md:p-4', className)}
    >
      {children}
    </Container>
  );
}

export function LayoutFooter() {
  return (
    <footer className="bg-background-main text-text-light">
      <Container
        maxWidth="xl"
        className="flex items-center justify-between px-4 py-6"
      >
        <p>
          {new Date().getFullYear()} © {APP_TITLE}
        </p>
      </Container>
    </footer>
  );
}
