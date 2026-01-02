import { useMemo } from 'react'

export const useSortByQuarter = (data, sortField = 'name') => {
  const sortedData = useMemo(() => {
    if (!data || !Array.isArray(data)) return []

    return [...data].sort((a, b) => {
      const nameA = a[sortField] || ''
      const nameB = b[sortField] || ''

      const quarterRegex = /(\d)T(\d{2,4})/i
      
      const matchA = nameA.match(quarterRegex)
      const matchB = nameB.match(quarterRegex)

      if (!matchA && !matchB) return 0
      
      if (!matchA) return 1
      if (!matchB) return -1

      const quarterA = parseInt(matchA[1])
      const yearA = parseInt(matchA[2])
      const quarterB = parseInt(matchB[1])
      const yearB = parseInt(matchB[2])

      const fullYearA = yearA < 100 ? 2000 + yearA : yearA
      const fullYearB = yearB < 100 ? 2000 + yearB : yearB

      if (fullYearA !== fullYearB) {
        return fullYearB - fullYearA 
      }
      
      return quarterB - quarterA 
    })
  }, [data, sortField])

  return sortedData
}