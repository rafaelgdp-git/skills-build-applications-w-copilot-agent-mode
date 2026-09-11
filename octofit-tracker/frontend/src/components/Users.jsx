import CollectionPage from './CollectionPage.jsx'

function Users() {
  return (
    <CollectionPage
      resource="users"
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