type DimensionsType = {
  width: number;
  height: number;
  depth: number;
};

type ReviewType = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type MetaType = {
  createdAt: string;
  updatedAt: string;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: DimensionsType;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ReviewType[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: MetaType;
  barcode: string;
  qrCode: string;
  images: string[];
  thumbnail: string;
};

export type ProductListType = {
  products: ProductType[];
};
