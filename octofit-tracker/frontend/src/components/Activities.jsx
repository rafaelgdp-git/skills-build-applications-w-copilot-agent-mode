import { apiBaseUrl } from '../api.js'
import CollectionPage from './CollectionPage.jsx'

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : `${apiBaseUrl}/api/activities/`

function Activities() {
  return (
    <CollectionPage
      resource="activities"
      endpoint={activitiesEndpoint}
      eyebrow="Movement log"
      title="Activities"
      description="See how the community is showing up, one session at a time."
      columns={[
        { key: 'user', label: 'Athlete' },
        { key: 'type', label: 'Activity' },
        { key: 'duration', label: 'Duration' },
        { key: 'points', label: 'Points' },
      ]}
    />
  )
}

export default Activities