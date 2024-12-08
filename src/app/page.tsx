import Discount from "@/components/Discount/Discount";
import FeaturedProducts from "@/components/FeaturedProduct/FeaturedProducts";
import Hero from "@/components/hero/Hero";
import LatestBlog from "@/components/latestBlog/LatestBlog";
import LatestProducts from "@/components/LatestProduct/LatestProducts";
import Offer from "@/components/Offers/Offer";
import TopCategories from "@/components/topCategories/TopCategories";
import TrendingProduct from "@/components/TrendingProduct/TrendingProduct";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <LatestProducts />
      <Offer />
      <TrendingProduct />
      <Discount />
      <TopCategories />
      <LatestBlog />
    </main>
  );
}
