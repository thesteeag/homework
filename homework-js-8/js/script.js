"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_complete: "is_completed",
};

const todos = [];

const errTodoNotFound = (todoValue) => `Todo Id: ${todoValue} is not found`;

const getNewTodoId = (todos) =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_complete]: false,
  };

  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
  if (todo === undefined) {
    console.error(errTodoNotFound([todoKeys.id], todoId));
    return null;
  }

  todo[todoKeys.is_complete] = !todo[todoKeys.is_complete];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);

  if (todoIndex === -1) {
    console.error(errTodoNotFound([todoKeys.id], todoId));
    return todos;
  }

  todos.splice(todoIndex, 1);
  return todos;
};
