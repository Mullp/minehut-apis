export interface ProductResponse {
  sku: string;
  price: number;
  salePrice?: number;
  title: string;
  shortTitle?: string;
  currency: string;
  description: string;
  shortDescription: string;
  category: string;
  type?: string;
  tags: string[];
  heroImage: string;
  images: string[];
  videos: string[];
  visible: boolean;
  slug: string;
  details: Details;
  updatedAt: string;
  createdAt: string;
  status: string;
  releaseDate: string;
  unpublished: boolean;
  onWishlist: boolean;
  isOwned: boolean;
}

export interface Details {
  promotionalDiscountOptIn: boolean;
  supportedLanguages: string[];
  contributors: string[];
  compatibleVersions: string[];
  versions: string[];
  managed: boolean;
  links: { _id: string; linkText: string; linkUrl: string }[];
  publisherId: string;
  publisherSlug: string;
  publisherName?: string;
  publisherLogo?: string;
}
