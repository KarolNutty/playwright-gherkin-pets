const { request } = require('@playwright/test');

let apiContext;
const baseUrl = 'http://localhost:3000/api'; // Troca se sua API estiver em outra porta ou rota

module.exports = {
  getApiContext: async () => {
    if (!apiContext) {
      apiContext = await request.newContext({
        baseURL: baseUrl // aqui é baseURL (com L maiúsculo)
      });
    }
    return apiContext;
  }
};
