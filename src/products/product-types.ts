import type { Id } from '@/common/common-types';

export type Product = {
  id: Id;
  category: {
    title: string;
    value: string;
  };
  writer: string;
  image: string;
  price: number;
  title: string;
};
