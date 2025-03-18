import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import NewPlan from './pages/new-plan-layout'
import Plans from './pages/plans'
import NotFoundPage from './pages/not-found'
import FuturePage from './pages/future-page'
import NewPlanReview from './pages/new-plan-review'
import NewPlanReplay from './pages/new-plan-reply'
import Home from './pages/home'
import PlanInfo from './pages/plan-info'
import AboutUs from './pages/about-us'
import NewPlanLayout from './pages/new-plan-layout'
import PlanHistory from './pages/plan-history'; // Add this import

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/new-plan/:currentStep" element={<NewPlanLayout />} />
        <Route path="/new-plan/review" element={<NewPlanReview />} />
        <Route path="/new-plan-replay" element={<NewPlanReplay />} />

        <Route path="/plans" element={<Plans />} />
        <Route path="/plan/:id" element={<PlanInfo />} />

        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/future-page" element={<FuturePage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* TODO: REAL PAGE DIDN'T EXIST */}

        <Route path="/plan-history" element={<PlanHistory />} /> {/* Add this route */}
        
      </Routes>
    </>
  )
}

export default App
