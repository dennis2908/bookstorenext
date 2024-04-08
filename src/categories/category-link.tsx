import type { NextLinkProps } from '@/routing/next-link';
import { NextLink } from '@/routing/next-link';
import Image from 'next/image';

type CategoryLinkProps = Pick<NextLinkProps, 'href'> & {
  title: string;
};

export function CategoryLink({ href, title }: CategoryLinkProps) {
  return (
    <NextLink
      className="group relative block h-80 overflow-hidden rounded-md"
      href={href}
    >
      <div className="absolute inset-0 grid place-items-center">
        <div className="rounded-md bg-black bg-opacity-50 p-6">
          <h2 className="mb-2 border-b-4 text-center text-3xl font-bold text-text-contrast md:text-4xl">
            {title}
          </h2>
        </div>
      </div>
    </NextLink>
  );
}
