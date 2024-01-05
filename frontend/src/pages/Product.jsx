import React from "react";
import { useGetProductsQuery } from "../redux/api";
import ProductCard from "../components/ProductCard";
import { Loader2Icon } from "lucide-react";

export default function Product() {
  const { isFetching, error, data } = useGetProductsQuery();
  return (
    <div className="p-4">
      <div className="text-3xl mb-5 font-semibold"> Products </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data && data.map((item) => <ProductCard key={item._id} data={item} />)}
        {isFetching &&
          Array(20)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="border min-h-36 text-center rounded-lg p-2 border-slate-400 dark:border-slate-600 flex items-center justify-center shadow-md dark:shadow-slate-600 shadow-slate-400"
              >
                <Loader2Icon
                  width={72}
                  height={72}
                  strokeWidth={1}
                  className="animate-spin"
                />
              </div>
            ))}
      </div>
    </div>
  );
}
