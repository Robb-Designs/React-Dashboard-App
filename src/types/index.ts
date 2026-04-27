// TYPES----------------------------------------------------------------------------------------------------------------


// TASK DATA STRUCTURE--------------------------------------------------------------------------------------------------
//Reusable variable for task filtering
export type Status = "inProgress" | "overdue" | "complete"

//Structured the data for every Task
export interface Task {
  id: string; //For a unique identifier *used for updates, deletes*
  status: Status;
  title: string;
  description?: string; //Optional
  date: string;
}

// TASK COMPONENT PROPS--------------------------------------------------------------------------------------------------

//Task Form: CREATE TASK
//Handles form submission/adding & sending data
export type TaskInput = {
  title: string;
  description?: string;
};

export interface TaskFormProps {
  onAddTask: (input: TaskInput) => void;
}

//Task Item: DISPLAY TASK
//Handles displaying task and buttons (delete, toggle)
export interface TaskItemProps {
    task: Task; //receives a full Task object that follows the Task interface. (Now in my component I can do things like 'task.title')
    onDelete: (id: string) => void;
    onToggle: (id: string) => void
}


