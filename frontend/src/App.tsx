import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Plans from './pages/plans';
import NotFoundPage from './pages/not-found';
import FuturePage from './pages/future-page';
import NewPlanReview from './pages/new-plan-review';
import NewPlanReplay from './pages/new-plan-reply';
import Home from './pages/home';
import PlanInfo from './pages/plan-info';
import AboutUs from './pages/about-us';
import PlanHistory from './pages/plan-history';
import { PlanProvider } from './context/plan-params';
import PlanRouteGuard from './guards/plan-route-guard';

function App() {
    return (
        <PlanProvider>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/new-plan/:currentPlanParam" element={<PlanRouteGuard />} />
                <Route path="/new-plan/review" element={<NewPlanReview />} />
                <Route path="/new-plan-replay" element={<NewPlanReplay />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/plan/:id" element={<PlanInfo />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/future-page" element={<FuturePage />} />
                <Route path="/plan-history" element={<PlanHistory />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </PlanProvider>
    );
}

export default App;