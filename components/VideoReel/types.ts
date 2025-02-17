export interface Product {  // Make sure to export the Product interface
  id: number;
  name: string;
  price: string;
  x: number;
  y: number;
}

export interface Video {
  id: number;
  url: string;
  products: Product[];
  likes: number;
  description: string;
}

// Example data (this part remains unchanged)
export const DUMMY_VIDEOS: Video[] = [
  {
    id: 1,
    url: '/api/placeholder/400/720',
    products: [
      { id: 1, name: 'Stylish T-Shirt', price: '$29.99', x: 30, y: 50 },
      { id: 2, name: 'Cool Sneakers', price: '$89.99', x: 70, y: 80 }
    ],
    likes: 1234,
    description: 'Check out these amazing products! Perfect for summer.'
  },
  {
    id: 2,
    url: '/api/placeholder/400/720',
    products: [
      { id: 3, name: 'Designer Watch', price: '$199.99', x: 40, y: 60 }
    ],
    likes: 2345,
    description: 'Luxury accessories for every occasion.'
  }
];
