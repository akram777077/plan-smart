import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import NewPlan from './pages/new-plan'
import Plans from './pages/plans'
import NotFoundPage from './pages/not-found'
import FuturePage from './pages/future-page'
import NewPlanReview from './pages/new-plan-review'
import NewPlanReplay from './pages/new-plan-reply'
import Home from './pages/home'
import PlanInfo from './pages/plan-info'

function App() {

  return (
    <>
<div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">Test Links</h2>
      
      {/* Home Links */}
      <Link to="/" className="block text-blue-500 hover:underline">Home ("/")</Link>
      <Link to="/home" className="block text-blue-500 hover:underline">Home ("/home")</Link>

      {/* Authentication */}
      <Link to="/login" className="block text-blue-500 hover:underline">Login</Link>

      {/* New Plan Pages */}
      <Link to="/new-plan/test123" className="block text-blue-500 hover:underline">New Plan ("/new-plan/:param")</Link>
      <Link to="/new-plan-review" className="block text-blue-500 hover:underline">New Plan Review</Link>
      <Link to="/new-plan-replay" className="block text-blue-500 hover:underline">New Plan Replay</Link>

      {/* Plans */}
      <Link to="/plans" className="block text-blue-500 hover:underline">Plans</Link>
      <Link to="/plan/1" className="block text-blue-500 hover:underline">Plan Details ("/plan/:id")</Link>

      {/* Future Page */}
      <Link to="/future-page" className="block text-blue-500 hover:underline">Future Page</Link>

      {/* 404 Page */}
      <Link to="/random-page" className="block text-red-500 hover:underline">404 Not Found ("/random-page")</Link>
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/new-plan/:param" element={<NewPlan />} />
        <Route path="/new-plan-review" element={<NewPlanReview />} />
        <Route path="/new-plan-replay" element={<NewPlanReplay />} />

        <Route path="/plans" element={<Plans />} />
        <Route path="/plan/:id" element={<PlanInfo />} />

        <Route path="/future-page" element={<FuturePage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* TODO: REAL PAGE DIDN'T EXIST */}
      </Routes>
    </>
  )
}

export default App
