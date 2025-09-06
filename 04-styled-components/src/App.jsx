import { useEffect, useState } from "react";
import { ThemeProvider } from 'styled-components';
import { Navbar } from './components/Navbar/Navbar';
import { ProductCard } from './components/ProductCard/ProductCard';
import { Skeleton } from './components/Skeleton/Skeleton';
import { products } from './data/products';
import { Container } from './App.styles';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <main>
        <Navbar cartCount={2} theme={theme} toggleTheme={toggleTheme} />
        <Container aria-label="Lista de produtos">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
            : products.map(product => <ProductCard key={product.id} product={product} />)
          }
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;