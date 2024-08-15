export type Billboard = {
  id: string;
  label: string;
  imageUrl: string;
};

export type Category = {
  id: string;
  name: string;
  billboard: Billboard;
};

export type Product = {
  id: string;
  size: Size;
  name: string;
  color: Color;
  price: string;
  images: Image[];
  category: Category;
  isFeatured: boolean;
};

export type Image = {
  id: string;
  url: string;
};

export type Size = {
  id: string;
  name: string;
  value: string;
};

export type Color = {
  id: string;
  name: string;
  value: string;
};
