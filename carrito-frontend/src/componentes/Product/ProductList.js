import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/productService';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProducts(response);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Productos Disponibles</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
