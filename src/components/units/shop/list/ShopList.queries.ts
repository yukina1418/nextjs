import { gql } from "@apollo/client";

export const FETCH_SHOPS = gql`
  query fetchShops {
    fetchShops {
      shopId
      shopProductName
      shopSeller
      shopDisCount
      shopDisCountPrice
      shopOriginalPrice
      shopDescription
      shopStock
      thumbnail
      createAt
    }
  }
`;

export const FETCH_SHOP_SELLER = gql`
  query fetchShopSeller($seller: String!) {
    fetchShopSeller(seller: $seller)
  }
`;
export const FETCH_SHOP_TITLE = gql`
  query fetchShopTitles($title: String!) {
    fetchShopTitles(title: $title)
  }
`;

export const FETCH_TOP_SHOP = gql`
  query fetchTopShop {
    fetchTopShop {
      shopId
      shopProductName
      shopSeller
      shopDisCount
      shopDisCountPrice
      shopOriginalPrice
      thumbnail
    }
  }
`;
