import CollectionPage from './CollectionPage.jsx'

function Activities() {
  return (
    <CollectionPage
      resource="activities"
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