import CollectionPage from './CollectionPage.jsx'

function Workouts() {
  return (
    <CollectionPage
      resource="workouts"
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