// import '@shopify/shopify-api/adapters/node';
import {shopifyApi, shopify, LATEST_API_VERSION} from '@shopify/shopify-api';
// import express from 'express';

const shopifyClient = shopifyApi({
  apiKey: process.env.REACT_APP_SHOPIFY_CUSTOM_APP_API_TOKEN,
  apiSecretKey: process.env.REACT_APP_SHOPIFY_CUSTOM_APP_API_SECRET,
  scopes: ['read_products', 'write_products']
});

let shop = 'lehw-test-store.myshopify.com';
let storefrontAccessToken = process.env.REACT_APP_SHOPIFY_STOREFRONT_API_TOKEN;

const storefrontClient = new shopify.clients.Storefront({
  domain: shop,
  storefrontAccessToken,
  hostName: 'localhost',
});

// const app = express();

export { shopifyClient, storefrontClient }
