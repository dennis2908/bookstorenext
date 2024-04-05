import { CartDrawer } from '@/cart/cart-drawer';
import { RegisterDrawer } from '@/cart/register-drawer';
import { LayoutContent, LayoutHeader } from '@/layout/layout';

type AppLayoutProps = React.PropsWithChildren;

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <LayoutHeader>
        <RegisterDrawer />
        <CartDrawer />
      </LayoutHeader>
      <LayoutContent>{children}</LayoutContent>
    </>
  );
}
