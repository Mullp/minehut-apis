export interface MakerResponse {
  _id: string;
  flags: Flags;
  publisherId: string;
  publisherSlug: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  description: string;
  links: Links;
  publisherName: string;
  socialProfiles: SocialProfiles;
  heroImage: string;
  publisherLogo: string;
  promotionalDiscountOptIn: boolean;
}

export interface Flags {
  moderated: boolean;
  paymentSetup: boolean;
}

export interface Links {
  supportWebsite: string;
  publisherWebsite: string;
}

export interface SocialProfiles {
  discord?: string;
  twitter?: string;
  youtube?: string;
  instagram?: string;
  tiktok?: string;
}
