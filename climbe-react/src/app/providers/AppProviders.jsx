import { BrowserRouter } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import ErrorBoundary from "./ErrorBoundary"

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ErrorBoundary
        fallback={
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h2>Ops! Algo deu errado.</h2>
            <p>Tente recarregar a página ou volte mais tarde.</p>
          </div>
        }
      >
        {children}
      </ErrorBoundary>
      <Toaster position="top-right" />
    </BrowserRouter>
  )
}

export default AppProviders
