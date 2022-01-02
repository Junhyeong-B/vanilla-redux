import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return state.filter((todo) => +todo.id !== +action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const paintTodos = () => {
  const todos = store.getState();
  ul.innerHTML = `${todos
    .map(
      (todo) =>
        `<li>${todo.text} <button class="X" data-id="${todo.id}">X</button></li>`
    )
    .join("")}`;
};

store.subscribe(paintTodos);

const addTodo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
};

const deleteTodo = (e) => {
  const { id } = e.target.dataset;
  if (id) {
    store.dispatch({ type: DELETE_TODO, id });
  }
};

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  addTodo(todo);
};

form.addEventListener("submit", onSubmit);
ul.addEventListener("click", deleteTodo);
