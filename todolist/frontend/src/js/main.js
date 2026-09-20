import { elements } from "./elements";
import { Api } from "./api";
let tasks = [];


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
  tasks.forEach(t => {
    const taskElement = elements.taskTemplate.content.cloneNode(true);

    taskElement.querySelector('.task').dataset.id = t.id;
    taskElement.querySelector('.task-name').textContent = t.title;
    taskElement.querySelector('.task-date').textContent = 
      `Criada em: ${new Date(t.createdAt).toLocaleDateString('pt-br')}`;
    taskElement.querySelector('input[type="checkbox"]').checked = t.checked;

    elements.taskList.append(taskElement);
  })
}

loadTasks();