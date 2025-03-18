import { Plan } from '../models/plan';

export const samplePlans: Plan[] = [
  {
    id: '1',
    name: 'Math Exam',
    completedDate: 'March 17, 2025',
    goal: 'Score 90% or higher on the final exam in 2 weeks',
    progress: 80,
    tasks: [
      { id: 't1', description: 'Review Calculus Fundamentals', completed: false },
      { id: 't2', description: 'Practice Integration', completed: false },
      { id: 't3', description: 'Solve Example Problems', completed: false }
    ],
    totalUsers: 2854
  },
  {
    id: '2',
    name: 'Physics Review',
    completedDate: 'March 18, 2025',
    goal: 'Understand quantum mechanics principles for midterm',
    progress: 65,
    tasks: [
      { id: 't1', description: 'Study wave-particle duality', completed: true },
      { id: 't2', description: 'Practice quantum problems', completed: false },
      { id: 't3', description: 'Review lecture notes', completed: false }
    ],
    totalUsers: 2960
  },
  {
    id: '3',
    name: 'Literature Essay',
    completedDate: 'March 19, 2025',
    goal: 'Complete 5-page analysis of modernist literature',
    progress: 90,
    tasks: [
      { id: 't1', description: 'Research modernist authors', completed: true },
      { id: 't2', description: 'Create essay outline', completed: true },
      { id: 't3', description: 'Write first draft', completed: false }
    ],
    totalUsers: 2100
  }
];