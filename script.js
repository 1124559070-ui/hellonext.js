const STORAGE_KEY = "todo-app-items";

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const toolbar = document.getElementById("toolbar");
const footer = document.getElementById("footer");
const emptyHint = document.getElementById("emptyHint");
const itemCount = document.getElementById("itemCount");
const clearCompletedBtn = document.getElementById("clearCompleted");
const filterBtns = document.querySelectorAll(".filter-btn");

let todos = loadTodos();
let currentFilter = "all";

function loadTodos() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function createId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function getFilteredTodos() {
  switch (currentFilter) {
    case "active":
      return todos.filter((t) => !t.completed);
    case "completed":
      return todos.filter((t) => t.completed);
    default:
      return todos;
  }
}

function getActiveCount() {
  return todos.filter((t) => !t.completed).length;
}

function getCompletedCount() {
  return todos.filter((t) => t.completed).length;
}

function render() {
  const filtered = getFilteredTodos();
  const hasTodos = todos.length > 0;

  toolbar.hidden = !hasTodos;
  footer.hidden = !hasTodos;
  emptyHint.hidden = hasTodos;

  const active = getActiveCount();
  itemCount.textContent = `${active} 项待办`;
  clearCompletedBtn.hidden = getCompletedCount() === 0;

  todoList.innerHTML = "";

  if (filtered.length === 0 && hasTodos) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.style.justifyContent = "center";
    li.style.color = "var(--text-muted)";
    li.style.fontSize = "0.9rem";
    li.textContent =
      currentFilter === "active"
        ? "没有进行中的任务 🎉"
        : "还没有已完成的任务";
    todoList.appendChild(li);
    return;
  }

  filtered.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item" + (todo.completed ? " completed" : "");
    li.dataset.id = todo.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.setAttribute("aria-label", "删除任务");
    deleteBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>`;
    deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

    li.append(checkbox, span, deleteBtn);
    todoList.appendChild(li);
  });
}

function addTodo(text) {
  const trimmed = text.trim();
  if (!trimmed) return;

  todos.unshift({
    id: createId(),
    text: trimmed,
    completed: false,
  });

  saveTodos();
  render();
}

function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    render();
  }
}

function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  saveTodos();
  render();
}

function clearCompleted() {
  todos = todos.filter((t) => !t.completed);
  saveTodos();
  render();
}

function setFilter(filter) {
  currentFilter = filter;
  filterBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
  });
  render();
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo(todoInput.value);
  todoInput.value = "";
  todoInput.focus();
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => setFilter(btn.dataset.filter));
});

clearCompletedBtn.addEventListener("click", clearCompleted);

render();
todoInput.focus();
