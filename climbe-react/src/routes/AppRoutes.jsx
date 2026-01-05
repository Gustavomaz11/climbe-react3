import { Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"

import ScrollToTop from "../components/scrollToTop/ScrollToTop"
import Loading from "../components/loading/Loading"

const WhitePage = lazy(() => import("../pages/whitePage/WhitePage"))
const ServicePage = lazy(() => import("../pages/servicos/ServicePage"))
const ServicesIndex = lazy(() => import("../pages/servicos/ServicesIndex"))

const Home = lazy(() => import("../pages/Home"))

const Valuation = lazy(() => import("../pages/servicos/Valuation"))
const Bpo = lazy(() => import("../pages/servicos/Bpo"))
const Cfo = lazy(() => import("../pages/servicos/Cfo"))
const Contabilidade = lazy(() => import("../pages/servicos/Contabilidade"))
const Mea = lazy(() => import("../pages/servicos/Mea"))

const Ri = lazy(() => import("../pages/ri/Ri"))
const NossoValuation = lazy(() => import("../pages/ri/pages/NossoValuation"))
const AcordoSocios = lazy(() => import("../pages/ri/pages/AcordoSocios"))
const ContratoSocial = lazy(() => import("../pages/ri/pages/ContratoSocial"))
const EducacaoContinua = lazy(() => import("../pages/ri/pages/EducacaoContinua"))
const Nps = lazy(() => import("../pages/ri/pages/Nps"))
const BalancoPatrimonial = lazy(() => import("../pages/ri/pages/BalancoPatrimonial"))
const Resultados = lazy(() => import("../pages/ri/pages/Resultados"))
const PlanejamentoEstrategico = lazy(() => import("../pages/ri/pages/PlanejamentoEstrategico"))
const Compliance = lazy(() => import("../pages/ri/pages/Compliance"))
const AtasReunioes = lazy(() => import("../pages/ri/pages/AtasReunioes"))

const Relatorios = lazy(() => import("../pages/relatorios/Relatorios"))
const Artigos = lazy(() => import("../pages/artigos/Artigos"))
const RelatoriosNacionais = lazy(() => import("../pages/relatorios/RelatoriosNacionais"))
const RelatoriosInternacionais = lazy(() => import("../pages/relatorios/RelatoriosInternacionais"))
const RelatoriosCripto = lazy(() => import("../pages/relatorios/RelatoriosCripto"))

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<WhitePage />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<ServicePage />}>
            <Route path="/servicos" element={<ServicesIndex />} />
            <Route path="/servicos/valuation" element={<Valuation />} />
            <Route path="/servicos/bpo" element={<Bpo />} />
            <Route path="/servicos/cfo" element={<Cfo />} />
            <Route path="/servicos/contabilidade" element={<Contabilidade />} />
            <Route path="/servicos/mea" element={<Mea />} />

            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/relatorios/nacionais" element={<RelatoriosNacionais />} />
            <Route path="/relatorios/internacionais" element={<RelatoriosInternacionais />} />
            <Route path="/relatorios/cripto" element={<RelatoriosCripto />} />
            <Route path="/artigos" element={<Artigos />} />

            <Route path="/ri" element={<Ri />} />
            <Route path="/ri/acordoSocios" element={<AcordoSocios />} />
            <Route path="/ri/contratoSocial" element={<ContratoSocial />} />
            <Route path="/ri/educacaoContinua" element={<EducacaoContinua />} />
            <Route path="/ri/nps" element={<Nps />} />
            <Route path="/ri/resultados" element={<Resultados />} />
            <Route path="/ri/balancoPatrimonial" element={<BalancoPatrimonial />} />
            <Route path="/ri/planejamentoEstrategico" element={<PlanejamentoEstrategico />} />
            <Route path="/ri/nossoValuation" element={<NossoValuation />} />
            <Route path="/ri/atasReunioes" element={<AtasReunioes />} />
            <Route path="/ri/compliance" element={<Compliance />} />
          </Route>

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>
    </>
  )
}

export default AppRoutes
