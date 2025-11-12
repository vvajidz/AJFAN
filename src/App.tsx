import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <title>Ajfan Pizza - Freshly Baked Happiness | ajfanpizza.in</title>
          <meta
            name="description"
            content="Ajfan Pizza serves oven-fresh, cheesy pizzas straight to your door. Order now for a slice of happiness!"
          />
          <meta
            name="keywords"
            content="Ajfan Pizza, best pizza, pizza delivery, ajfanpizza.in, order pizza online"
          />
          <meta
            property="og:title"
            content="Ajfan Pizza - Freshly Baked Happiness"
          />
          <meta
            property="og:description"
            content="Delicious cheesy pizzas baked fresh daily. Visit Ajfan Pizza today!"
          />
          <meta property="og:image" content="/pizza-preview.png" />
          <meta property="og:url" content="https://ajfanpizza.in" />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://ajfanpizza.in" />
        </Helmet>

        {/* Toast & Notifications */}
        <Toaster />
        <Sonner />

        {/* App Routes */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD CUSTOM ROUTES ABOVE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
