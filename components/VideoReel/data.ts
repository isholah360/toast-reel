export interface VideoItem {
  id: number;
  videoUrl: string;
  product: string;
  productLink: string;
}

export const DUMMY_VIDEOS: VideoItem[] = [
  {
    id: 1,
    videoUrl: 'https://www.youtube.com/watch?v=6IQYFQ3HW7Y',
    product: 'Product A',
    productLink: '/product-a'
  },
  {
    id: 2,
    videoUrl: 'https://www.youtube.com/watch?v=fa5DA6hpdLc',
    product: 'Product B',
    productLink: '/product-b'
  },
  {
    id: 3,
    videoUrl: 'https://www.youtube.com/watch?v=6GKQ5rIDJAY',
    product: 'Product C',
    productLink: '/product-c'
  },
  {
    id: 4,
    videoUrl: 'https://www.youtube.com/watch?v=_p0lDxPqJiM',
    product: 'Product D',
    productLink: '/product-d'
  },
  {
    id: 5,
    videoUrl: 'https://www.youtube.com/watch?v=qk0D4OV95bQ',
    product: 'Product E',
    productLink: '/product-e'
  },
  {
    id: 6,
    videoUrl: 'https://www.youtube.com/watch?v=Y1eZ_JydvZE',
    product: 'Product F',
    productLink: '/product-f'
  },
  {
    id: 7,
    videoUrl: 'https://www.youtube.com/watch?v=Q4V0Ke161-o',
    product: 'Product G',
    productLink: '/product-g'
  },
  {
    id: 8,
    videoUrl: 'https://www.youtube.com/watch?v=f38HhPo_PVc',
    product: 'Product H',
    productLink: '/product-h'
  },
  {
    id: 9,
    videoUrl: 'https://www.youtube.com/watch?v=ljfdGYlcA_M',
    product: 'Product I',
    productLink: '/product-i'
  },
  {
    id: 10,
    videoUrl: 'https://www.youtube.com/watch?v=6IQYFQ3HW7Y',
    product: 'Product J',
    productLink: '/product-j'
  }
];