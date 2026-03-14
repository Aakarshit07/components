"use client";
import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

//API URL
const API_URL = "https://dummyjson.com/products/search";

const useSearchSuggestion = (query: string) => {
  const [productList, setProductList] = useState<any>([]);

  // Get Products List
  async function getProductList(query: string): Promise<void> {
    const jsonResponse = await fetch(`${API_URL}?q=${query}`);
    const { products } = await jsonResponse.json();
    setProductList(products);
    console.log(products);
  }

  const debouncedFetch = useDebounce(getProductList, 300);

  useEffect(() => {
    if (query) {
      debouncedFetch(query);
    } else {
      setProductList([]);
    }
  }, [query]);

  return {
    productList,
  };
};

export default useSearchSuggestion;
