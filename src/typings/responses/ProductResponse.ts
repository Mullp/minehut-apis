export interface ProductResponse {
  sku: string;
  price: number;
  salePrice: number | null;
  title: string;
  shortTitle: string | null;
  currency: string;
  description: string;
  shortDescription: string;
  category: string;
  type: string | null;
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
  promotionalDiscountOptIn: boolean | null;
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
