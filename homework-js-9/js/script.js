"use strict";

const formEL = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const todosEl = document.querySelector(".todos");

const todoKeys = {
  id: "id",
  text: "text",
  is_complete: "is_completed",
};

const todos = [];

const errTodoNotFound = (todoValue) => `Todo ID: ${todoValue} is not found`;

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

const createTodoElement = (text) => {
  const todoEl = document.createElement("li");
  todoEl.classList.add("todo");

  todoEl.innerHTML = `          <div class="todo-text">${text}</div>
          <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
          </div>`;
  return todoEL
};

const handleCreateTodo = (todos, text) => {
  const todo = createTodo(todos, text);
  const todoEl = createTodoElement(text);
  todosEl.prepend(todoEl);
  
};
