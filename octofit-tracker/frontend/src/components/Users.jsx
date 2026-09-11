import { apiBaseUrl } from '../api.js'
import CollectionPage from './CollectionPage.jsx'

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : `${apiBaseUrl}/api/users/`

function Users() {
  return (
    <CollectionPage
      resource="users"
      endpoint={usersEndpoint}
      eyebrow="The octofit community"
      title="Users"
      description="Manage the athletes building healthier routines together."
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'team', label: 'Team' },
        { key: 'level', label: 'Level' },
      ]}
    />
  )
}

export default Users