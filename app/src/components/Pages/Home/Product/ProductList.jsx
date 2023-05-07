import React, { useState } from "react";
import Product from "./Product";
import "./productList.scss";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ProductList = ({ products, productsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(products.length / productsPerPage) - 1;
  const currency = process.env.REACT_APP_CURRENCY;

  const renderProducts = () => {
    const start = currentPage * productsPerPage;
    const end = start + productsPerPage;
    const visibleProducts = products.slice(start, end);

    return (
      <div className="products">
        {visibleProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            description={product.description}
            price={currency + product.price}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="product-list mb-[273px]">
      {/*-------Пагинация, стрелки-------------*/}
      <div className="pagination-controls">
        <div className={`left-control ${currentPage > 0 && "active"}`}
          onClick={() => currentPage > 0 && setCurrentPage((page) => page - 1)}>
          <VscCircleLargeFilled color="#CFCFCF" size={55} className="circle" />
          <BsChevronLeft size={25} className="arrow" />
        </div>
        <div className={`right-control ${currentPage < pageCount && "active"}`}
          onClick={() => currentPage < pageCount && setCurrentPage((page) => page + 1)}>
          <VscCircleLargeFilled color="#CFCFCF" size={55} className="circle" />
          <BsChevronRight size={25} className="arrow" />
        </div>
      </div>
      {/*-------Отображение продуктов-------------*/}
      {renderProducts()}
    </div>
  );
};

export default ProductList;
