// TYPES----------------------------------------------------------------------------------------------------------------


// TASK TYPE
//Reusable variable for task filtering
export type Status = "inProgress" | "overdue" | "complete"

//Structured the data for Task Component
export interface Task {
  id: string;
  status: Status;
  title: string;
  description?: string;
  date: string;
}