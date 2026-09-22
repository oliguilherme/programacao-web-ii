import { elements } from "./elements";
import { Api } from "./api";
let tasks = [];


loadTasks();
setupEvents();

async function loadTasks() {
  try {
    tasks = await Api.fetchTasks();
    showTasks();
  } catch (error) {
    console.error("Erro ao carregar tarefas: ", error);
  }
}

function showTasks() {
  elements.taskList.innerHTML = '';

  if (tasks.length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.classList.add('empty-state');
    emptyMessage.textContent = 'Nenhuma tarefa cadastrada';
    elements.taskList.append(emptyMessage);
  } else {
    tasks.forEach(t => {
      const taskElement = elements.taskTemplate.content.cloneNode(true);
      
      const task = taskElement.querySelector('.task');
      if (t.checked) task.classList.add('completed');
      
      taskElement.querySelector('.task').dataset.id = t.id;
      taskElement.querySelector('.task-name').textContent = t.title;
      taskElement.querySelector('.task-date').textContent = 
        `Criada em: ${new Date(t.createdAt).toLocaleDateString('pt-br')}`;
      taskElement.querySelector('input[type="checkbox"]').checked = t.checked;

      elements.taskList.append(taskElement);
    });
  }
  updateProgress();
}

async function handleAddTasks(e) {
  e.preventDefault();

  const title = elements.taskInput.value.trim();

  try {
    const newTask = await Api.createTask(title);
    tasks.push(newTask);
    showTasks();
    elements.taskInput.value = '';
  } catch (error) {
    alert(error.message);
  }
}

async function handleDeleteTask(e) {
  const btnDelete = e.target.closest('.delete-task');
  if (!btnDelete) return;

  const taskElement = btnDelete.closest('.task');
  const id = taskElement.dataset.id;

  try {
    await Api.deleteTask(id);
    tasks = tasks.filter(t => t.id !== Number(id));
    
    showTasks();
  } catch (error) {
    alert(error.message);
  }
}

async function handleUpdateTask(e) {
  const checkbox =  e.target.closest('input[type="checkbox"]');
  if (!checkbox) return;

  const taskElement = checkbox.closest('.task');
  const id = taskElement.dataset.id;
  const checked = checkbox.checked;

  try {
    const updatedTask = await Api.updateTask(id, checked);

    const index = tasks.findIndex(t => t.id === updatedTask.id);
    tasks[index] = updatedTask;

    showTasks();
  } catch (error) {
    alert(error.message);
  }
}

function updateProgress() {
  const completedTasks = tasks.filter(t => t.checked).length;
  const totalTasks = tasks.length;

  elements.taskProgess.textContent = 
    `${completedTasks} de ${totalTasks} concluídas.`
}

function setupEvents() {
  elements.taskForm.addEventListener('submit', handleAddTasks);
  elements.taskList.addEventListener('click', handleDeleteTask);
  elements.taskList.addEventListener('change', handleUpdateTask);
}