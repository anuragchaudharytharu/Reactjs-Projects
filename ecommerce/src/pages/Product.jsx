import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductNotFound from '../not-found/ProductNotFound';
import { assets } from '../assets/frontend/assets';
import RelatedProducts from '../components/RelatedProducts';

export default function Home() {
  const { productId } = useParams();
  const { products, darkMode, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState('');
  const [imageState, setImageState] = useState('');
  const [size, setSize] = useState('');
  const [selectDescription, setSelectDescription] = useState(true);
  const [selectReviews, setSelectReviews] = useState(false);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        // console.log(item);
        setProductData(item);
        setImageState(item.image[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="pt-10 border-t-2">
      {/* ---------Product Details Section------- */}
      <div className="flex flex-col gap-12 smLgap-12 sm:flex-row">
        {/*---------- Product Images ---------*/}
        <div className="flex flex-1 gap-3 felx-col-reverse sm:flex-grow">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full scrollbar-none">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                onClick={() => {
                  setImageState(item);
                }}
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%] ">
            <img src={imageState} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* ---------------Product Info---------------- */}
        <div className="flex-1 ">
          <h1 className="mt-2 text-2xl font-medium">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>

          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  className={`border-none py-2 px-4 text-black bg-gray-100 ${
                    item === size ? 'bg-orange-500 font-bold' : ''
                  }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            className={`${
              darkMode ? 'bg-slate-600 active:bg-orange-500' : 'bg-black'
            } px-8 py-3 text-sm text-white active:bg-gray-700`}
            onClick={() => addToCart(productData._id, size)}
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />

          <div
            className={`flex flex-col gap-1 mt-5 text-sm  ${
              darkMode ? 'text-white' : 'text-gray-500'
            }`}
          >
            <p>100% Original product.</p>
            <p>Cash on delivery available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* ---------Product Description and Review Section--------- */}
      <div className="mt-20">
        <div className="flex">
          <p
            className={`px-5 py-3 text-sm border cursor-pointer ${
              darkMode
                ? selectDescription
                  ? 'font-bold bg-orange-500 text-black'
                  : ''
                : selectDescription
                ? 'font-bold bg-black text-white'
                : ''
            }`}
            onClick={() => {
              if (!selectDescription) {
                setSelectDescription(true);
                setSelectReviews(false);
              }
            }}
          >
            Description
          </p>
          <p
            className={`px-5 py-3 text-sm border cursor-pointer ${
              darkMode
                ? selectReviews
                  ? 'font-bold bg-orange-500 text-black'
                  : ''
                : selectReviews
                ? 'font-bold bg-black text-white'
                : ''
            }`}
            onClick={() => {
              if (!selectReviews) {
                setSelectReviews(true);
                setSelectDescription(false);
              }
            }}
          >
            Reviews (122)
          </p>
        </div>

        <div className="flex flex-col gap-4 px-6 py-6 text-sm text-gray-500 border">
          <p className={selectDescription ? '' : 'hidden'}>
            {productData.name}. {productData.description}
          </p>
          <p className={selectReviews ? '' : 'hidden'}>
            {productData.description}
          </p>
        </div>
      </div>

      {/* ----------Display Related Products--------- */}
      <RelatedProducts
        category={productData.category}
        typeSubCategory={productData.subCategory}
      />
    </div>
  ) : (
    <ProductNotFound />
  );
}
