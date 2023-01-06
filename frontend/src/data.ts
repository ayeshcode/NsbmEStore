import {Product} from './app/shared/models/product';
import { Tag } from './app/shared/models/Tag';

export const sample_product: Product[] = [
  {
    id:'1',
    name: 'Yupoong',
    price: 10,
    favorite: false,
    stars: 4.5,
    imageUrl: 'assets/Yupoong.png',
    tags: ['Tag'],
  },
  {
    id:'2',
    name: 'ClassicWool',
    price: 20,
    favorite: true,
    stars: 4.7,
    imageUrl: 'assets/ClassicWool.png',
    tags: ['Tag'],
  },
  {
    id:'3',
    name: 'BlackSnapback',
    price: 5,
    favorite: false,
    stars: 3.5,
    imageUrl: 'assets/BlackSnapback.png',
    tags: ['Tag'],
  },
  {
    id:'4',
    name: 'Flexfit',
    price: 2,
    favorite: true,
    stars: 3.3,
    imageUrl: 'assets/Flexfit.png',
    tags: ['Tag'],
  },
  {
    id:'5',
    name: '47Caps',
    price: 11,
    favorite: false,
    stars: 3.0,
    imageUrl: 'assets/47Caps.png',
    tags: ['Tag'],
  },
  {
    id:'6',
    name: 'Hunter',
    price: 9,
    favorite: false,
    stars: 4.0,
    imageUrl: 'Hunter.png',
    tags: ['Tag'],
  },
]

export const sample_tags:any[] = [
  { name: 'All', count: 6 },
  { name: 'DAD CAPS', count: 4 },
  { name: 'FLAT CAPS', count: 2 },
  { name: 'SNAPBACK', count: 3 },
  { name: 'FITTED', count: 2 },
  { name: 'BUCKETS', count: 1 },
  { name: 'FLEXFIT', count: 1 },
  { name: 'ICE CAPS', count: 1 },
]
