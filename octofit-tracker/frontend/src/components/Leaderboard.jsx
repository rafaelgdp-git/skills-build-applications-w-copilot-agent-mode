import { apiBaseUrl } from '../api.js'
import CollectionPage from './CollectionPage.jsx'

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : `${apiBaseUrl}/api/leaderboard/`

function Leaderboard() {
  return (
    <CollectionPage
      resource="leaderboard"
      endpoint={leaderboardEndpoint}
      eyebrow="Friendly competition"
      title="Leaderboard"
      description="A quick read on the athletes setting the pace this week."
      columns={[
        { key: 'rank', label: 'Rank' },
        { key: 'user', label: 'Athlete' },
        { key: 'team', label: 'Team' },
        { key: 'points', label: 'Points' },
      ]}
    />
  )
}

export default Leaderboard