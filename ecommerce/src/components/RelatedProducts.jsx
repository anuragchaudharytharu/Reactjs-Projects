import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

export default function RelatedProducts({ category, typeSubCategory }) {
  let { products } = useContext(ShopContext);

  const [related, setRelated] = useState([]);

  useEffect(() => {
    let productsCopy = [...products];

    if (productsCopy.length > 0) {
      productsCopy = productsCopy.filter((item) => category === item.category);

      productsCopy = productsCopy.filter(
        (item) => typeSubCategory === item.subCategory
      );
      productsCopy = productsCopy.filter((item) => category === item.category);

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, typeSubCategory, category]);

  return (
    <div className="my-24">
      <div className="py-2 text-3xl text-center">
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {related.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
