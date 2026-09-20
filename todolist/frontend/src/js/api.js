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
}

