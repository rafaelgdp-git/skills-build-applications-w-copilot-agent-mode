import { apiBaseUrl } from '../api.js'
import CollectionPage from './CollectionPage.jsx'

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : `${apiBaseUrl}/api/teams/`

function Teams() {
  return (
    <CollectionPage
      resource="teams"
      endpoint={teamsEndpoint}
      eyebrow="Find your crew"
      title="Teams"
      description="Groups make consistency more visible and a little more fun."
      columns={[
        { key: 'name', label: 'Team' },
        { key: 'members', label: 'Members' },
        { key: 'points', label: 'Points' },
        { key: 'captain', label: 'Captain' },
      ]}
    />
  )
}

export default Teams