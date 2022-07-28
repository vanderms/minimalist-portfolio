import { Layout } from "./components/layout/layout";
import { Routes, Route } from "react-router-dom";
import { ContactPage } from "./pages/contact";
import { Homepage } from "./pages/homepage";
import { PortfolioPage } from "./pages/portfolio";
import { PortfolioSinglePage } from "./pages/portfolio-single";
import { NotFound } from "./pages/not-found";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:project" element={<PortfolioSinglePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
