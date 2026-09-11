import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">
          <Link className="brand" to="/">
            <span className="brand-mark">O</span>
            <span>OctoFit</span>
          </Link>
          <nav className="main-nav" aria-label="Primary navigation">
            <NavLink to="/activities">Activities</NavLink>
            <NavLink to="/workouts">Workouts</NavLink>
            <NavLink to="/teams">Teams</NavLink>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
            <NavLink to="/users">Users</NavLink>
          </nav>
          <span className="status-dot">API online</span>
        </header>

        <main className="content-wrap">
          <Routes>
            <Route path="/" element={<Activities />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
