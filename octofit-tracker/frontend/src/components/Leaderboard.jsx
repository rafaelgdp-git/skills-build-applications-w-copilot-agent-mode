import CollectionPage from './CollectionPage.jsx'

function Leaderboard() {
  return (
    <CollectionPage
      resource="leaderboard"
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