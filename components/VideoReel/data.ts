export interface VideoItem {
  id: number;
  videoUrl: string;
  product: string;
  productLink: string;
  likes: number;           
  description: string;     
}

export const DUMMY_VIDEOS: VideoItem[] = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/watch?v=6IQYFQ3HW7Y",
    product: "Product A",
    productLink: "/product-a",
    likes: 1234,            // Added likes
    description: "Check out this amazing product, perfect for all seasons!" // Added description
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/watch?v=fa5DA6hpdLc",
    product: "Product B",
    productLink: "/product-b",
    likes: 2345,
    description: "A must-have for every fashion lover! Get it now."
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/watch?v=6GKQ5rIDJAY",
    product: "Product C",
    productLink: "/product-c",
    likes: 3456,
    description: "This product is designed for comfort and style."
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/watch?v=_p0lDxPqJiM",
    product: "Product D",
    productLink: "/product-d",
    likes: 4567,
    description: "Perfect for all outdoor activities. Check it out!"
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/watch?v=qk0D4OV95bQ",
    product: "Product E",
    productLink: "/product-e",
    likes: 5678,
    description: "Limited time offer on this product. Grab it while it lasts!"
  },
  {
    id: 6,
    videoUrl: "https://www.youtube.com/watch?v=Y1eZ_JydvZE",
    product: "Product F",
    productLink: "/product-f",
    likes: 6789,
    description: "High quality and durability are guaranteed with this product."
  },
  {
    id: 7,
    videoUrl: "https://www.youtube.com/watch?v=Q4V0Ke161-o",
    product: "Product G",
    productLink: "/product-g",
    likes: 7890,
    description: "Perfect for those who love style and elegance."
  },
  {
    id: 8,
    videoUrl: "https://www.youtube.com/watch?v=f38HhPo_PVc",
    product: "Product H",
    productLink: "/product-h",
    likes: 8901,
    description: "An all-time favorite product. You won't regret it!"
  },
  {
    id: 9,
    videoUrl: "https://www.youtube.com/watch?v=ljfdGYlcA_M",
    product: "Product I",
    productLink: "/product-i",
    likes: 9012,
    description: "Stylish, comfortable, and affordable. What more could you ask for?"
  },
  {
    id: 10,
    videoUrl: "https://www.youtube.com/watch?v=6IQYFQ3HW7Y",
    product: "Product J",
    productLink: "/product-j",
    likes: 1023,
    description: "Ideal for those who want to make a statement."
  },
];
