import { useState, useEffect, useCallback } from "react"
import Table from "../../components/table/Table"
import Modal from "../../components/modal/Modal"
import { useFetch } from "../../hooks/useFetch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf, faDownload, faEye, faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons"

const RelatoriosInternacionais = () => {
  const prefix = import.meta.env.VITE_PREFIX_API || "http://localhost:3000"
  const { request, isLoading } = useFetch(prefix)

  const [arquivos, setArquivos] = useState([])
  const [allArquivos, setAllArquivos] = useState([])
  const [nextPageToken, setNextPageToken] = useState(null)

  // ✅ tokens por página (página 1 = null)
  const [pageTokens, setPageTokens] = useState([null])

  const [currentPage, setCurrentPage] = useState(1)

  // ✅ total de páginas vindo da API
  const [totalPages, setTotalPages] = useState(1)

  const [searchTerm, setSearchTerm] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [pdfLoading, setPdfLoading] = useState(true)

  // Buscar dados paginados
  const fetchData = async (pageToken = null) => {
    try {
      const endpoint = pageToken
        ? `/api/arquivos/internacional?pageToken=${pageToken}`
        : `/api/arquivos/internacional`

      const result = await request(endpoint)

      setArquivos(result.arquivos || [])
      setNextPageToken(result.nextPageToken || null)

      // ✅ pega totalPages da API
      if (typeof result.totalPages === "number") {
        setTotalPages(result.totalPages)
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error)
    }
  }

  const fetchAllData = async () => {
    try {
      setIsSearching(true)
      const result = await request("/api/arquivos/internacional/getAll")
      setAllArquivos(result.arquivos || [])
    } catch (error) {
      console.error("Erro ao buscar todos os dados:", error)
    } finally {
      setIsSearching(false)
    }
  }

  useEffect(() => {
    fetchData(null)
  }, [])

  // Filtrar dados quando o termo de busca mudar
  const filteredData = useCallback(() => {
    if (!searchTerm.trim()) return arquivos

    const lowerSearchTerm = searchTerm.toLowerCase()
    return allArquivos.filter((item) => {
      return (
        item.name?.toLowerCase().includes(lowerSearchTerm) ||
        item.createdTime?.toLowerCase().includes(lowerSearchTerm)
      )
    })
  }, [searchTerm, arquivos, allArquivos])

  // Quando usuário digitar, buscar todos os dados
  useEffect(() => {
    if (searchTerm.trim() && allArquivos.length === 0) {
      fetchAllData()
    }
  }, [searchTerm])

  const handleSearchChange = (value) => {
    setSearchTerm(value)

    // Se limpar a busca, resetar paginação e recarregar paginado
    if (!value.trim()) {
      setAllArquivos([])
      setCurrentPage(1)
      setPageTokens([null])
      fetchData(null)
    }
  }

  const handleNextPage = () => {
    if (searchTerm) return
    if (!nextPageToken) return

    // ✅ salva token da próxima página
    setPageTokens((prev) => {
      const newTokens = [...prev]
      newTokens[currentPage] = nextPageToken // página 2 fica no índice 1, etc.
      return newTokens
    })

    const newPage = currentPage + 1
    setCurrentPage(newPage)
    fetchData(nextPageToken)
  }

  const handlePreviousPage = () => {
    if (searchTerm) return
    if (currentPage <= 1) return

    const newPage = currentPage - 1
    const tokenDaPagina = pageTokens[newPage - 1] // token que carrega a página newPage
    setCurrentPage(newPage)
    fetchData(tokenDaPagina)
  }

  const handleViewFile = (file) => {
    setSelectedFile(file)
    setModalOpen(true)
    setPdfLoading(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedFile(null)
    setPdfLoading(true)
  }

  const columns = [
    {
      label: "Arquivo",
      field: "name",
      render: (item) => (
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <FontAwesomeIcon icon={faFilePdf} style={{ color: "#dc2626", fontSize: "24px" }} />
          <div>
            <div style={{ fontWeight: "600" }}>{item.name}</div>
            <div style={{ fontSize: "13px", color: "#6b7280" }}>
              {/* ✅ removido pdf_metadata */}
              PDF
            </div>
          </div>
        </div>
      )
    },
    {
      label: "Data",
      field: "createdTime",
      width: "140px",
      align: "center",
      render: (item) => new Date(item.createdTime).toLocaleDateString("pt-BR")
    },
    {
      label: "Ações",
      field: "actions",
      width: "180px",
      align: "center",
      render: (item) => (
        <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
          <button
            onClick={() => handleViewFile(item)}
            style={{
              padding: "8px 12px",
              background: "#79C6C0",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px"
            }}
          >
            <FontAwesomeIcon icon={faEye} /> Ver
          </button>
          <a
            href={item.webContentLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "8px 12px",
              background: "#222",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px"
            }}
          >
            <FontAwesomeIcon icon={faDownload} /> Baixar
          </a>
        </div>
      )
    }
  ]

  const displayData = filteredData()
  const showPagination = !searchTerm

  return (
    <div style={{ padding: "40px 24px" }}>
      {/* ✅ título + indicador 1/15 */}
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
        <h1 style={{ margin: 0 }}>Relatórios Internacionais</h1>

        {showPagination && (
          <div style={{ fontSize: 14, color: "#6b7280", fontWeight: 600 }}>
            {currentPage}/{totalPages}
          </div>
        )}
      </div>

      <Table
        columns={columns}
        data={displayData}
        pagination={showPagination}
        serverSidePagination={!searchTerm}
        nextPageToken={nextPageToken}
        previousPageToken={currentPage > 1}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
        loading={isLoading || isSearching}
        currentPage={currentPage}
        searchable={true}
        searchPlaceholder="Buscar por nome do arquivo..."
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "90vh",
            width: "90vw",
            maxWidth: "1200px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px",
              borderBottom: "1px solid #e5e7eb",
              background: "#f9fafb"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <FontAwesomeIcon icon={faFilePdf} style={{ color: "#dc2626", fontSize: "24px" }} />
              <div>
                <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>{selectedFile?.name}</h2>
                <p style={{ margin: 0, fontSize: "13px", color: "#6b7280" }}>
                  {/* ✅ removido pdf_metadata */}
                  Visualização do PDF
                </p>
              </div>
            </div>
            <button
              onClick={handleCloseModal}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "24px",
                color: "#6b7280",
                padding: "4px"
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
            {pdfLoading && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#ffffff",
                  zIndex: 10
                }}
              >
                <FontAwesomeIcon
                  icon={faSpinner}
                  spin
                  style={{ fontSize: "48px", color: "#79C6C0", marginBottom: "16px" }}
                />
                <p style={{ color: "#6b7280", fontSize: "16px", margin: 0 }}>
                  Carregando documento...
                </p>
              </div>
            )}
            {selectedFile && (
              <iframe
                src={`${selectedFile.webViewLink.replace("/view?", "/preview?")}`}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none"
                }}
                title={selectedFile.name}
                onLoad={() => setPdfLoading(false)}
              />
            )}
          </div>

          <div
            style={{
              padding: "16px 20px",
              borderTop: "1px solid #e5e7eb",
              background: "#f9fafb",
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px"
            }}
          >
            <a
              href={selectedFile?.webContentLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 20px",
                background: "#79C6C0",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                fontWeight: "600"
              }}
            >
              <FontAwesomeIcon icon={faDownload} />
              Baixar Arquivo
            </a>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default RelatoriosInternacionais
