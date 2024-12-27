"use client";
import { urlFor } from "@/sanity/lib/image";
import { useShoppingCart } from "use-shopping-cart";

interface dataType {
  slug: string;
  title: string;
  image: string;
  prevPrice: string;
  currentPrice: string;
}

const AddToCartButton = ({ product }: { product: dataType }) => {
  const { addItem } = useShoppingCart();
  console.log(product);
  return (
    <button
      onClick={() =>
        addItem({
          id: product.slug,
          name: product.title,
          price: parseFloat(product.currentPrice),
          currency: "USD",
          image: urlFor(product.image).url(),
        })
      }
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
