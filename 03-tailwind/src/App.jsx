import { useEffect, useState } from "react";
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { Skeleton } from './components/Skeleton';
import { products } from './data/products';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <Navbar cartCount={2} />
      <section
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto px-4 pt-24"
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
