// src/pages/ProductPage.js

import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductFilter from '../components/ProductFilter';
import ProductSort from '../components/ProductSort';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import { getAllProducts } from '../services/productService';
// import { useCart } from '../context/CartContext';
import ProductDetails from '../components/ProductDetails';
import ShoppingCart from '../components/ShoppingCart'; // Import ShoppingCart component

const ProductPage = () => {
  // const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState(1000);
  const [sortOption, setSortOption] = useState('price_asc');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getAllProducts();
      setProducts(productsData);
      setFilteredProducts(productsData);
      const categoriesList = [...new Set(productsData.map((product) => product.category))];
      setCategories(categoriesList);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, priceRange, sortOption, searchTerm]);

  const filterProducts = () => {
    let filtered = [...products];

    if (selectedCategory !== '') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    filtered = filtered.filter((product) => product.price <= priceRange);

    if (searchTerm !== '') {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    sortProducts(filtered);
    setFilteredProducts(filtered);
  };

  const sortProducts = (productsArray) => {
    switch (sortOption) {
      case 'price_asc':
        productsArray.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        productsArray.sort((a, b) => b.price - a.price);
        break;
      case 'name_asc':
        productsArray.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name_desc':
        productsArray.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const handleAddToCart = (product) => {
  //   addToCart(product);
  // };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="product-page">
      <h1 style={{ textAlign: 'center'}}>E-commerce Product Page</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductFilter
        categories={categories}
        onFilterChange={handleCategoryChange}
        onPriceChange={handlePriceChange}
      />
      <ProductSort onSortChange={handleSortChange} />
      <ProductList products={currentProducts} onProductClick={openProductDetails} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={closeProductDetails} />
      )}
      <ShoppingCart /> {/* Display ShoppingCart component */}
    </div>
  );
};

export default ProductPage;
