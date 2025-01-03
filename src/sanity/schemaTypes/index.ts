import { type SchemaTypeDefinition } from 'sanity'
import FeaturedProduct from './products/FeaturedProduct'
import LatestProduct from './products/LatestProduct'
import TrendingProduct from './products/TrendingProduct'
import TopCategories from './products/TopCategories'
import ProductsPage from './products/ProductsPage'
import PagesProduct from './products/PagesProduct'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [FeaturedProduct, LatestProduct, TrendingProduct, TopCategories, ProductsPage, PagesProduct],
}
