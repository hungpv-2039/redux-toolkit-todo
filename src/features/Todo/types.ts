export interface Todo {
  id: string;
  content: string;
  isComplete: boolean;
}

export interface State {
  loading: boolean;
  todos: Todo[];
  alert: Alert;
  counter: number;
  errors: Errors;
}

export interface Alert {
  status: "error" | "success";
  content: string;
}

export interface Errors {
  [key: string]: string | undefined;
}
