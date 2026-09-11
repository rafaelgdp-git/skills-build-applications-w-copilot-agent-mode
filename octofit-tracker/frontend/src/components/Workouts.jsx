import { apiBaseUrl } from '../api.js'
import CollectionPage from './CollectionPage.jsx'

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : `${apiBaseUrl}/api/workouts/`

function Workouts() {
  return (
    <CollectionPage
      resource="workouts"
      endpoint={workoutsEndpoint}
      eyebrow="Your next move"
      title="Workouts"
      description="Personalized ideas to keep momentum going between check-ins."
      columns={[
        { key: 'name', label: 'Workout' },
        { key: 'level', label: 'Level' },
        { key: 'duration', label: 'Duration' },
        { key: 'focus', label: 'Focus' },
      ]}
    />
  )
}

export default Workouts