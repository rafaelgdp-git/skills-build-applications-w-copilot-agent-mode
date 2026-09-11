import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function CollectionPage({ resource, title, eyebrow, description, columns }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    fetchCollection(resource)
      .then((nextItems) => {
        if (active) setItems(nextItems)
      })
      .catch((requestError) => {
        if (active) setError(requestError.message)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [resource])

  return (
    <section className="page-section">
      <div className="page-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lede">{description}</p>
        </div>
        <div className="metric-chip">
          <strong>{items.length}</strong>
          <span>tracked</span>
        </div>
      </div>

      <div className="table-panel">
        {loading && <p className="empty-state">Loading {resource}...</p>}
        {error && <p className="empty-state error-state">{error}</p>}
        {!loading && !error && items.length === 0 && (
          <p className="empty-state">No {resource} have been logged yet.</p>
        )}
        {!loading && !error && items.length > 0 && (
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead>
                <tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}</tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={item._id || item.id || index}>
                    {columns.map((column) => (
                      <td key={column.key}>{column.render ? column.render(item) : item[column.key] || '-'}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}

export default CollectionPage