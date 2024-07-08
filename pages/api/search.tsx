
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Product } from '../../app/types';

interface SearchQuery {
  rating?: string;
  priceMin?: string;
  priceMax?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { rating, priceMin, priceMax } = req.query as SearchQuery;

  console.log("calling the hundler")

  try {
    const response = await axios.get('https://dummyjson.com/products');
    let products: Product[] = response.data.products;

    // Filter products based on query parameters
    if (rating) {
      products = products.filter(product => product.rating > parseFloat(rating));
    }
    if (priceMin) {
      products = products.filter(product => product.price >= parseFloat(priceMin));
    }
    if (priceMax) {
      products = products.filter(product => product.price <= parseFloat(priceMax));
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
}
