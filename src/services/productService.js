// src/services/productService.js

import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
