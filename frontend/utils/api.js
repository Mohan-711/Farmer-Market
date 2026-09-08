export const api = {
  baseUrl: 'http://localhost:5000/api',

  get(endpoint) {
    return fetch(`${this.baseUrl}${endpoint}`);
  },

  post(endpoint, data) {
    return fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },
};
