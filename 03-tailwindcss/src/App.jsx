import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import ProductCard from './components/ProductCard/ProductCard';
import Skeleton from './components/Skeleton/Skeleton';
import { products } from './data/products';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar cartCount={2} />
      <section
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        aria-label="Lista de produtos"
      >
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
          : products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </section>
    </main>
  );
}

export default App;