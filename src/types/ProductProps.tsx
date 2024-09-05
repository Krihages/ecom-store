export type ProductProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: ImageProps;
  rating: number;
  reviews?: ReviewProps[];
  tags?: string[];
};

export type ImageProps = {
  url: string;
  alt?: string;
};

export type ReviewProps = {
  id: string;
  rating: number;
  description?: string;
  username?: string;
};


