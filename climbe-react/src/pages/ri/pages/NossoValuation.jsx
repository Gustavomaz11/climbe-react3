import { useState, useEffect } from "react"
import Table from "../../../components/table/Table"
import Modal from "../../../components/modal/Modal"
import { useFetch } from "../../../hooks/useFetch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf, faDownload, faEye, faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons"

const NossoValuation = () => {
  const prefix = import.meta.env.VITE_PREFIX_API || "http://localhost:3000"
  const { request, isLoading } = useFetch(prefix)
  
  const [arquivos, setArquivos] = useState([])
  const [nextPageToken, setNextPageToken] = useState(null)
  const [pageTokens, setPageTokens] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [pdfLoading, setPdfLoading] = useState(true)

  const fetchData = async (pageToken = null) => {
    try {
      const endpoint = pageToken 
        ? `/api/ri/nossoValuation?pageToken=${pageToken}`
        : `/api/ri/nossoValuation`
      
      const result = await request(endpoint)
      
      setArquivos(result.arquivos)
      setNextPageToken(result.nextPageToken)
    } catch (error) {
      console.error("Erro ao buscar dados:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleNextPage = () => {
    if (nextPageToken) {
      setPageTokens(prev => [...prev, nextPageToken])
      setCurrentPage(prev => prev + 1)
      fetchData(nextPageToken)
    }
  }

  const handlePreviousPage = () => {
    if (pageTokens.length > 0) {
      const newTokens = [...pageTokens]
      const previousToken = newTokens[newTokens.length - 2] || null
      newTokens.pop()
      setPageTokens(newTokens)
      setCurrentPage(prev => prev - 1)
      fetchData(previousToken)
    } else if (currentPage > 1) {
      setCurrentPage(1)
      fetchData()
    }
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
              {item.pdf_metadata?.page_count} páginas
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
      render: (item) => new Date(item.createdTime).toLocaleDateString('pt-BR')
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

  return (
    <div style={{ padding: "40px 24px" }}>
      <h1>Nosso Valuation</h1>
      <Table
        columns={columns}
        data={arquivos}
        pagination={true}
        serverSidePagination={true}
        nextPageToken={nextPageToken}
        previousPageToken={pageTokens.length > 0}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
        loading={isLoading}
        currentPage={currentPage}
        searchable={true}
        searchPlaceholder="Buscar por nome do arquivo..."
      />

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          height: "90vh",
          width: "90vw",
          maxWidth: "1200px"
        }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            padding: "20px",
            borderBottom: "1px solid #e5e7eb",
            background: "#f9fafb"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <FontAwesomeIcon icon={faFilePdf} style={{ color: "#dc2626", fontSize: "24px" }} />
              <div>
                <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
                  {selectedFile?.name}
                </h2>
                <p style={{ margin: 0, fontSize: "13px", color: "#6b7280" }}>
                  {selectedFile?.pdf_metadata?.page_count} páginas
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
              <div style={{
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
              }}>
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
                src={`${selectedFile.webViewLink.replace('/view?', '/preview?')}`}
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

          <div style={{
            padding: "16px 20px",
            borderTop: "1px solid #e5e7eb",
            background: "#f9fafb",
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px"
          }}>
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

export default NossoValuation