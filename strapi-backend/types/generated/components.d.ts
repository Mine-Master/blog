import type { Schema, Attribute } from '@strapi/strapi';

export interface NewsCardCard extends Schema.Component {
  collectionName: 'components_news_card_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    banner: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'news-card.card': NewsCardCard;
    }
  }
}
