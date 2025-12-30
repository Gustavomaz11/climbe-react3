// Table.jsx
import styles from "./table.module.css"
import { useState, useMemo } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
  faSpinner,
  faSearch
} from "@fortawesome/free-solid-svg-icons"

const Table = ({ 
  columns, 
  data, 
  pagination = false,
  serverSidePagination = false,
  nextPageToken = null,
  previousPageToken = null,
  onNextPage = null,
  onPreviousPage = null,
  loading = false,
  emptyMessage = "Nenhum registro encontrado",
  currentPage = 1,
  totalRecords = null,
  searchable = true,
  searchPlaceholder = "Buscar..."
}) => {

  const [searchTerm, setSearchTerm] = useState("")

  // Filtrar dados baseado na busca
  const filteredData = useMemo(() => {
    if (!searchable || !searchTerm.trim()) return data

    const lowerSearchTerm = searchTerm.toLowerCase()

    return data.filter((item) => {
      return columns.some((column) => {
        const value = item[column.field]
        
        if (value == null) return false
        
        // Converte para string e busca
        return String(value).toLowerCase().includes(lowerSearchTerm)
      })
    })
  }, [data, searchTerm, columns, searchable])

  // Renderizar valor da célula
  const renderCell = (item, column) => {
    if (column.render) {
      return column.render(item)
    }
    return item[column.field]
  }

  const hasNextPage = serverSidePagination ? nextPageToken !== null : false
  const hasPreviousPage = serverSidePagination ? previousPageToken !== null || currentPage > 1 : false

  return (
    <div className={styles.table_container}>
      {searchable && (
        <div className={styles.search_container}>
          <div className={styles.search_wrapper}>
            <FontAwesomeIcon icon={faSearch} className={styles.search_icon} />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.search_input}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className={styles.search_clear}
                aria-label="Limpar busca"
              >
                ×
              </button>
            )}
          </div>
          {searchTerm && (
            <div className={styles.search_results}>
              {filteredData.length} resultado{filteredData.length !== 1 ? 's' : ''} encontrado{filteredData.length !== 1 ? 's' : ''}
            </div>
          )}
        </div>
      )}
      <div className={styles.table_wrapper}>
        <table className={styles.table}>
          <thead className={styles.table_head}>
            <tr>
              {columns.map((column, index) => (
                <th 
                  key={index} 
                  className={styles.table_header}
                  style={{ 
                    width: column.width,
                    textAlign: column.align || 'left'
                  }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.table_body}>
            {loading ? (
              <tr>
                <td 
                  colSpan={columns.length} 
                  className={styles.loading_message}
                >
                  <FontAwesomeIcon icon={faSpinner} spin />
                  <span>Carregando...</span>
                </td>
              </tr>
            ) : filteredData.length > 0 ? (
              filteredData.map((item, rowIndex) => (
                <tr key={item.id || rowIndex} className={styles.table_row}>
                  {columns.map((column, colIndex) => (
                    <td 
                      key={colIndex} 
                      className={styles.table_cell}
                      style={{ textAlign: column.align || 'left' }}
                    >
                      {renderCell(item, column)}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td 
                  colSpan={columns.length} 
                  className={styles.empty_message}
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {pagination && serverSidePagination && filteredData.length > 0 && (
        <div className={styles.pagination}>
          <div className={styles.pagination_info}>
            {totalRecords ? (
              `Mostrando página ${currentPage} (total de registros: ${totalRecords})`
            ) : (
              `Página ${currentPage}`
            )}
          </div>
          
          <div className={styles.pagination_controls}>
            <button 
              className={styles.pagination_button}
              onClick={onPreviousPage}
              disabled={!hasPreviousPage || loading}
              aria-label="Página anterior"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <span className={styles.pagination_text}>
              Página {currentPage}
            </span>

            <button 
              className={styles.pagination_button}
              onClick={onNextPage}
              disabled={!hasNextPage || loading}
              aria-label="Próxima página"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Table