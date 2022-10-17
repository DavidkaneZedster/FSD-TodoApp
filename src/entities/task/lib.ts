import { Task } from "shared/api/typicode/models";

export const getTaskStatus = (data: Task) => {
  return data.completed ? "CLOSED" : "OPENED";
};
