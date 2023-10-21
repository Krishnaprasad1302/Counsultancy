import React from 'react';
import { Link } from 'react-router-dom';
import "./Products.css"

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    imageUrl: 'brooke-lark-M4E7X3z80PQ-unsplash.jpg', // Use distinct image URLs for each product
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for Product 2',
    imageUrl: 'brooke-lark-M4E7X3z80PQ-unsplash.jpg', // Use distinct image URLs for each product
  },
  // Add more product data here
];

function Products() {
  return (
    <div>
      <h1 className='text-black-50 fs-5 fw-bolder text-center  '><span className='bi bi-dash '></span>More Products <span className='bi bi-dash '></span></h1>
      <div className='imagesDiv'> 
        {products.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img className='productsImage' src={product.imageUrl} alt={product.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
