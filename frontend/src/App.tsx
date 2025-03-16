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
import AboutUs from './pages/about-us'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/new-plan/:param" element={<NewPlan />} />
        <Route path="/new-plan-review" element={<NewPlanReview />} />
        <Route path="/new-plan-replay" element={<NewPlanReplay />} />

        <Route path="/plans" element={<Plans />} />
        <Route path="/plan/:id" element={<PlanInfo />} />

        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/future-page" element={<FuturePage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* TODO: REAL PAGE DIDN'T EXIST */}
      </Routes>
    </>
  )
}

export default App
