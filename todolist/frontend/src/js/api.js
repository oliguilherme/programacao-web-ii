const API_URL = "http://localhost:3000/task";

export class Api {
  static async fetchTasks() {
    const response = await fetch(API_URL);
    return response.json();
  }
}

