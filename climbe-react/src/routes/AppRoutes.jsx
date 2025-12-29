import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Loading from "../components/loading/Loading";

const WhitePage = lazy(() => import("../pages/whitePage/WhitePage"));
const ServicePage = lazy(() => import("../pages/servicos/ServicePage"));

const Home = lazy(() => import("../pages/Home"));

const Valuation = lazy(() => import("../pages/servicos/Valuation"));
const Bpo = lazy(() => import("../pages/servicos/Bpo"));
const Cfo = lazy(() => import("../pages/servicos/Cfo"));
const Contabilidade = lazy(() => import("../pages/servicos/Contabilidade"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<WhitePage />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<ServicePage />}>
            <Route path="/servicos/valuation" element={<Valuation />} />
            <Route path="/servicos/bpo" element={<Bpo />} />
            <Route path="/servicos/cfo" element={<Cfo />} />
            <Route path="/servicos/contabilidade" element={<Contabilidade />} />
          </Route>

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
