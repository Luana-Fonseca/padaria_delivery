import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import OrderTracking from "./pages/OrderTracking";


function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/cart"} component={Cart} />
        <Route path={"/rastrear"} component={OrderTracking} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

// NOTE: About Theme
// Design: Artesanal Rústico Moderno
// - Paleta: Marrom quente (#8B6F47), Creme (#F5EFE7), Laranja (#D97706)
// - Tipografia: Playfair Display para títulos, Lato para corpo
// - Animações: Suaves e naturais, sem pressa
// - Elementos: Texturas rústicas, cards com bordas irregulares, divisores orgânicos

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </CartProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
