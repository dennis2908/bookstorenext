import { routes } from '@/routing/routing-utils';
import { redirect } from 'next/navigation';
export function Hero() {
  return redirect(routes.search());
}
