import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DescriptionProducts.css';

const products = [
  {
    id: 1,
    title: 'Fruits and Cookies',
    description: `Fruits are a diverse group of natural foods that grow on trees, shrubs, and vines. They are not only delicious but also highly nutritious, making them an essential part of a balanced diet. Fruits come in various shapes, sizes, and colors, and they offer a wide range of flavors, from sweet and juicy to tart and refreshing.
    Fruits are packed with essential vitamins, minerals, and dietary fiber, making them an excellent choice for promoting good health. They provide a rich source of antioxidants, which help protect the body from harmful free radicals and reduce the risk of chronic diseases.
    Common fruits include apples, oranges, bananas, strawberries, and grapes, but there are countless varieties to explore. Fruits can be enjoyed fresh, sliced, or blended into smoothies, added to salads, or even baked into desserts. They are not only a delicious treat but also a natural way to satisfy your sweet tooth while staying healthy.

    Cookies: 
    Cookies are delightful baked goods that have a special place in the hearts of people of all ages. These small, sweet treats come in countless flavors and forms, each offering a unique taste experience. From the classic chocolate chip cookie to the elegant macaron, cookies have a way of bringing comfort and joy to those who savor them.
    The beauty of cookies lies in their versatility. They can be soft and chewy, crispy and crunchy, or cake-like and tender. Some are adorned with chocolate chips, nuts, or dried fruits, while others are flavored with spices, extracts, or citrus zest. The possibilities are endless when it comes to cookie creations.
    Cookies are the perfect accompaniment to a warm cup of coffee or a glass of cold milk. They're a delightful snack to enjoy during a break or as a sweet ending to a meal. Cookies are also a cherished part of holiday traditions, where families and friends come together to bake and share their favorite recipes.
    Whether you prefer a classic chocolate chip cookie, a delicate sugar cookie with colorful icing, or a decadent double chocolate brownie, cookies are a simple pleasure that brings comfort and happiness to our lives.`,

    imageUrls: [
      '/brooke-lark-M4E7X3z80PQ-unsplash.jpg',
      '/joanna-kosinska-78uNJt1kPw8-unsplash.jpg',
      '/vegetables-set-left-black-slate.jpg',
    ],
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for Product 2',
    imageUrls: [
      '/joanna-kosinska-78uNJt1kPw8-unsplash.jpg',
    ],
  },
  // Add more product data here
];

function ImageDetails() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = products.find((p) => p.id === parseInt(id));
  const paragraphs = product.description.split('\n\n');
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.imageUrls.length);
    }, 5000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [product.imageUrls]);

  if (!product) {
    return <div>Product not found</div>;
  }



  return (
    <div className='ImageDiv'>
      <h1 className='Heading'>Image Details</h1>
      <div className='image-container'>
        <img className='ImageOfProduct' src={product.imageUrls[currentImageIndex]} alt={product.title} />
      </div>
      <h2 className='ProductTitle'>{product.title}</h2>
      <div className='Description'>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default ImageDetails;
