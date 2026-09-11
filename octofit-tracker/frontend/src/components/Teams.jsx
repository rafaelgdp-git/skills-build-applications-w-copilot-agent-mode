import CollectionPage from './CollectionPage.jsx'

function Teams() {
  return (
    <CollectionPage
      resource="teams"
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