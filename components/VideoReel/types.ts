// Ensure consistency in VideoItem definition
export interface Product {
  id: number;
  name: string;
  price: string;
  x: number;
  y: number;
}

export interface VideoItem {  // Updated to match SingleVideo props
  id: number;
  videoUrl: string;
  products: Product[]; // Updated to match the products
  likes: number;
  description: string;
}

// Ensure this data matches the VideoItem structure
export const DUMMY_VIDEOS: VideoItem[] = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/watch?v=6IQYFQ3HW7Y",
    products: [
      { id: 1, name: "Stylish T-Shirt", price: "$29.99", x: 30, y: 50 },
      { id: 2, name: "Cool Sneakers", price: "$89.99", x: 70, y: 80 }
    ],
    likes: 1234,
    description: "Check out these amazing products! Perfect for summer."
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/watch?v=fa5DA6hpdLc",
    products: [
      { id: 3, name: "Designer Watch", price: "$199.99", x: 40, y: 60 }
    ],
    likes: 2345,
    description: "Luxury accessories for every occasion."
  }
];
