
export interface Product {
  id: number;
  name: string;
  price: string;
  x: number;
  y: number;
}

export interface VideoItem {  
  id: number;
  videoUrl: string;
  products: Product[]; 
  likes: number;
  description: string;
}


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
      { id: 3, name: "Designer Watch", price: "$199.99", x: 56, y: 60 }
    ],
    likes: 2345,
    description: "Luxury accessories for every occasion."
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/watch?v=ljfdGYlcA_M",
    products: [
      { id: 1, name: "Designer Watch", price: "$199.99", x: 40, y: 60 }
      { id: 2, name: "Cool Sneakers", price: "$89.99", x: 70, y: 80 }
    ],
    likes: 2345,
    description: "Luxury accessories for every occasion."
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/watch?v=Q4V0Ke161-o",
    products: [
      { id: 3, name: "Designer Watch", price: "$199.99", x: 30, y: 34 }
    ],
    likes: 2345,
    description: "Luxury accessories for every occasion."
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/watch?v=Y1eZ_JydvZE",
    products: [
      { id: 3, name: "Designer Watch", price: "$199.99", x: 25, y: 60 }
    ],
    likes: 2345,
    description: "Luxury accessories for every occasion."
  },
  {
    id: 6,
    videoUrl: "https://www.youtube.com/watch?v=fa5DA6hpdLc",
    products: [
      { id: 1, name: "Designer Watch", price: "$199.99", x: 45, y: 45 }
      { id: 2, name: "Cool Sneakers", price: "$89.99", x: 70, y: 80 }
    ],
    likes: 2345,
    description: "Luxury accessories for every occasion."
  }
  {
    id: 7,
    videoUrl: "https://www.youtube.com/watch?v=fa5DA6hpdLc",
    products: [
      { id: 3, name: "Designer Watch", price: "$199.99", x: 50, y: 80 }
    ],
    likes: 2345,
    description: "Luxury accessories for every occasion."
  }
];
