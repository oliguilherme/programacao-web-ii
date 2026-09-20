const API_URL = "http://localhost:3000/task";

export class Api {
  static async fetchTasks() {
    const response = await fetch(API_URL);
    return response.json();
  }

  static async createTask(title) {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro desconhenecido do servidor");
    }

    return response.json();
  }

  static async deleteTask(id) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro desconhecido do servidor");
    }
  }

  static async updateTask(id, checked) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro desconhecido do servidor");
    }

    return response.json();
  }
}

