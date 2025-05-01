import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    description: '';
    displayName: 'Feature';
    icon: 'star';
  };
  attributes: {
    description_ar: Schema.Attribute.Text;
    description_en: Schema.Attribute.Text;
    title_ar: Schema.Attribute.String;
    title_en: Schema.Attribute.String;
  };
}

export interface SharedHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_slides';
  info: {
    displayName: 'Hero Slide';
    icon: 'image';
  };
  attributes: {
    description_en: Schema.Attribute.Text;
    image: Schema.Attribute.Media;
    media_type: Schema.Attribute.Enumeration<['image', 'video']>;
    title_en: Schema.Attribute.String;
    video_url: Schema.Attribute.Text;
  };
}

export interface SharedSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_socials';
  info: {
    description: 'Social media contacts for team members';
    displayName: 'Social';
  };
  attributes: {
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
    whatsapp: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.feature': SharedFeature;
      'shared.hero-slide': SharedHeroSlide;
      'shared.social': SharedSocial;
    }
  }
}
