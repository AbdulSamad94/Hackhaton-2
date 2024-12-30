"use client";
import { urlFor } from "@/sanity/lib/image";
import { useShoppingCart } from "use-shopping-cart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

interface dataType {
  slug: string;
  title: string;
  image: string;
  prevPrice: string;
  currentPrice: string;
}

const AddToCartButton = ({ product }: { product: dataType }) => {
  const { addItem } = useShoppingCart();

  const handleCart = async () => {
    try {
      addItem({
        id: product.slug,
        name: product.title,
        price: parseFloat(product.currentPrice),
        currency: "USD",
        image: urlFor(product.image).url(),
      });

      toast.success(`${product.title} added to cart!`);
    } catch (err) {
      toast.error(`Error adding ${product.title} to cart! ${err} occurred`);
    }
  };
  console.log(product);
  return (
    <>
      {" "}
      <button onClick={handleCart}>Add to Cart</button>
      <ToastContainer />
    </>
  );
};

export default AddToCartButton;
