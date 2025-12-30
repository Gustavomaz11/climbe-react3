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
const Mea = lazy(() => import("../pages/servicos/Mea"))

const Ri = lazy(() => import('../pages/ri/Ri'))

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
            <Route path="/servicos/mea" element={<Mea />} />
          
            <Route path="/ri" element={<Ri />}></Route>
            <Route path="/ri/acordoSocios" element={<Ri />}></Route>
            <Route path="/ri/contratoSocial" element={<Ri />}></Route>
            <Route path="/ri/educacaoContinua" element={<Ri />}></Route>
            <Route path="/ri/nps" element={<Ri />}></Route>
            <Route path="/ri/resultados" element={<Ri />}></Route>
            <Route path="/ri/balancoPatrimonial" element={<Ri />}></Route>
            <Route path="/ri/planejamentoEstrategico" element={<Ri />}></Route>
            <Route path="/ri/nossoValuation" element={<Ri />}></Route>
            <Route path="/ri/nossoValuation" element={<Ri />}></Route>
            <Route path="/ri/atasReunioes" element={<Ri />}></Route>
          </Route>


          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
