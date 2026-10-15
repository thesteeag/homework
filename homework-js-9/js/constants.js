export const todoKeys = {
  id: "id",
  text: "text",
  is_complete: "is_completed",
};

export const errTodoNotFound = (todoValue) =>
  `Todo ID: ${todoValue} is not found`;
