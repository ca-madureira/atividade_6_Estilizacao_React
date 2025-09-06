import { useEffect, useState } from "react";
import { Navbar } from './components/Navbar/Navbar';
import { ProductCard } from './components/ProductCard/ProductCard';
import { Skeleton } from './components/Skeleton/Skeleton';
import { products } from './data/products';
import { Container } from './App.styles';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <Navbar cartCount={2} />
      <Container aria-label="Lista de produtos">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
          : products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </Container>
    </main>
  );
}

export default App;
