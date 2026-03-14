"use Client";
import useSearchSuggestion from "@/hooks/useSearchSuggestion";
import { useState } from "react";

function AutoComplete() {
  const [query, setQuery] = useState("");

  // Handle Input Change
  const handleInputChange = (event: any) => {
    let value = event.target.value;
    // We can sanitize the query
    setQuery(value);
  };

  // Get Suggstion List
  const { productList } = useSearchSuggestion(query);

  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-md">
      <input
        type="text"
        value={query}
        onChange={(event) => handleInputChange(event)}
        className="bg-rose-100"
      />

      {productList && (
        <div className="flex flex-col items-center justify-between gap-2 hover:shadow-sm rounded-md">
          {productList?.map((product: any) => (
            <div key={product.id}>
              <p>Name: {product.title}</p>
              <p>Price: {product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AutoComplete;
