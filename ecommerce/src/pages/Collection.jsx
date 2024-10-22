import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { assets } from '../assets/frontend/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import SearchBar from '../components/SearchBar';

export default function Collection() {
  const { products, search, showSearch, darkMode } = useContext(ShopContext);

  // Show Filter Menu State
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  // All Product State
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    setAllProduct(products);
  }, [products]);

  // Side Filter Section State
  const [category, setCategory] = useState([]); // for category filters
  const [typeSubCategory, setTypeSubCategory] = useState([]); // for type filters

  // Category Side Filter Toggel Function // adding and removing item to array
  const toggleCategoryFilter = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(
        (currentState) => currentState.filter((item) => item !== e.target.value) //remove item that is not equal to e.target.value from the currentState array
      );
    } else {
      setCategory((currentState) => [...currentState, e.target.value]); //add a new item that is e.target value to the currentState array
    }
  };

  // Type Side Filter Toggel Function //adding and removing item to array
  const toggleTypeFilter = (e) => {
    if (typeSubCategory.includes(e.target.value)) {
      setTypeSubCategory(
        (currentState) => currentState.filter((item) => item !== e.target.value) //removing item that is not equal to e.target.value from the currentState array
      );
    } else {
      setTypeSubCategory((currentState) => [...currentState, e.target.value]); //add a new item that is e.target value to the currentState array
    }
  };

  //Side Filter Function
  const applyFilter = () => {
    let productsCopy = [...products]; //create copy of products

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (typeSubCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        typeSubCategory.includes(item.subCategory)
      );
    }

    setAllProduct(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, typeSubCategory, showSearch, search]);

  // Sort Filter State
  const [sortType, setSortType] = useState('relevant');

  // Sort Filter Function
  const applySortFilter = () => {
    let sortedProducts = [...products];

    switch (sortType) {
      case 'low-high':
        setAllProduct(sortedProducts.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setAllProduct(sortedProducts.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter(); //we have to take in account of applyfilter
    }
  };

  useEffect(() => {
    applySortFilter();
  }, [sortType]);

  return (
    <div>
      <SearchBar />
      <div className="flex flex-col gap-1 pt-10 border-t sm:flex-row sm:gap-10 ">
        {/* Left Section */}
        {/* Filter Left Options */}
        <div className="min-w-60">
          <Link
            onClick={() =>
              showFilterMenu
                ? setShowFilterMenu(false)
                : setShowFilterMenu(true)
            }
          >
            <p className="flex items-center gap-2 my-2 text-xl sm:cursor-default">
              FILTERS
              <img
                src={assets.dropdown_icon}
                alt=""
                className={`h-3 sm:hidden ${showFilterMenu ? 'rotate-90' : ''}`}
              />
            </p>
          </Link>

          {/* Category Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilterMenu ? '' : 'hidden'
            } sm:block`}
          >
            <p className="mb-3 font-medium tex-sm">CATEGORIES</p>

            <div
              className={`flex flex-col gap-2 text-sm font-light ${
                darkMode ? 'text-white' : 'text-gray-700'
              }`}
            >
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value={'Men'}
                  className="w-3"
                  onChange={toggleCategoryFilter}
                />
                Men
              </p>

              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value={'Women'}
                  className="w-3"
                  onChange={toggleCategoryFilter}
                />
                Women
              </p>

              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value={'Kids'}
                  className="w-3"
                  onChange={toggleCategoryFilter}
                />
                Kids
              </p>
            </div>
          </div>

          {/* Type Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 my-5 ${
              showFilterMenu ? '' : 'hidden'
            } sm:block`}
          >
            <p className="mb-3 font-medium tex-sm">CATEGORIES</p>

            <div
              className={`flex flex-col gap-2 text-sm font-light ${
                darkMode ? 'text-white' : 'text-gray-700'
              }`}
            >
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value={'Topwear'}
                  className="w-3"
                  onChange={toggleTypeFilter}
                />
                Topwear
              </p>

              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value={'Bottomwear'}
                  className="w-3"
                  onChange={toggleTypeFilter}
                />
                Bottomwear
              </p>

              <p className="flex gap-2">
                <input
                  type="checkbox"
                  value={'Winterwear'}
                  className="w-3"
                  onChange={toggleTypeFilter}
                />
                Winterwear
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <div className="flex justify-between mb-4 text-base sm:text-2xl">
            <Title text1={'ALL'} text2={'COLLECTIONS'} />

            {/* Product Sort */}
            <select
              className={`${
                darkMode ? 'bg-black' : 'bg-white'
              } px-2 text-sm border-2 border-gray-300`}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Map Products i.e All peoduct Collection */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
            {allProduct.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
            {/* 
              //we can alos use this code below for search filter function
            
            {allProduct
              .filter((item) =>
                search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search)
              )
              .map((item) => (
                <ProductItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
