const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const emptyState = document.getElementById("emptyState");
const totalTasksSpan = document.getElementById("totalTasks");
const completedTasksSpan = document.getElementById("completedTasks");
const clearBtn = document.getElementById("clearBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

// Carregar tarefas ao iniciar
function init() {
  renderTasks();
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });
}

function renderTasks() {
  taskList.innerHTML = "";
  
  const filteredTasks = getFilteredTasks();
  
  if (filteredTasks.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  filteredTasks.forEach((task, index) => {
    const actualIndex = tasks.indexOf(task);
    const li = document.createElement("li");
    li.className = "task-item";
    if (task.completed) li.classList.add("completed");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.checked = task.completed;
    checkbox.onchange = () => toggleTask(actualIndex);

    // Texto da tarefa
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text;
    span.ondblclick = () => editTask(actualIndex);

    // Botões
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "task-buttons";

    const editBtn = document.createElement("button");
    editBtn.className = "btn-task btn-edit";
    editBtn.innerHTML = "✏️ Editar";
    editBtn.onclick = () => editTask(actualIndex);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-task btn-delete";
    deleteBtn.innerHTML = "🗑️ Deletar";
    deleteBtn.onclick = () => removeTask(actualIndex);

    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(buttonsDiv);
    taskList.appendChild(li);
  });

  updateStats();
  saveTasks();
}

function getFilteredTasks() {
  if (currentFilter === "completed") {
    return tasks.filter(task => task.completed);
  } else if (currentFilter === "active") {
    return tasks.filter(task => !task.completed);
  }
  return tasks;
}

function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;

  totalTasksSpan.textContent = `Total: ${total}`;
  completedTasksSpan.textContent = `Concluídas: ${completed}`;

  // Mostrar/esconder botões de limpeza
  if (completed > 0) {
    clearBtn.style.display = "inline-block";
  } else {
    clearBtn.style.display = "none";
  }

  if (total > 0) {
    clearAllBtn.style.display = "inline-block";
  } else {
    clearAllBtn.style.display = "none";
  }
}

function addTask() {
  const value = taskInput.value.trim();
  if (value === "") {
    taskInput.focus();
    return;
  }

  tasks.push({ text: value, completed: false });
  taskInput.value = "";
  taskInput.focus();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function removeTask(index) {
  if (confirm("Tem certeza que deseja remover esta tarefa?")) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

function editTask(index) {
  const newText = prompt("Editar tarefa:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

function filterTasks(filter) {
  currentFilter = filter;
  
  // Atualizar botões de filtro
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");
  
  renderTasks();
}

function clearCompleted() {
  if (confirm("Deseja remover todas as tarefas concluídas?")) {
    tasks = tasks.filter(t => !t.completed);
    currentFilter = "all";
    document.querySelectorAll(".filter-btn").forEach((btn, i) => {
      if (i === 0) btn.classList.add("active");
      else btn.classList.remove("active");
    });
    renderTasks();
  }
}

function clearAll() {
  if (confirm("⚠️ Tem certeza? Isso vai remover TODAS as tarefas!")) {
    tasks = [];
    currentFilter = "all";
    document.querySelectorAll(".filter-btn").forEach((btn, i) => {
      if (i === 0) btn.classList.add("active");
      else btn.classList.remove("active");
    });
    renderTasks();
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Inicializar
init();
