export interface Plan {
    id: string;
    name: string;
    completedDate?: string;
    goal: string;
    progress: number;
    tasks: Task[];
    totalUsers?: number;
  }
  
  export interface Task {
    id: string;
    description: string;
    completed: boolean;
  }