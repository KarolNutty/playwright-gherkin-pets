const assert = require('assert');
const request = require('supertest');
const { Given, When, Then } = require('@cucumber/cucumber');

const baseUrl = 'http://localhost:3000/api/pets';

let response;

Given('que eu tenho os dados de um novo pet', function () {
    this.novoPet = {
      name: 'Rex',
      species: 'Dog'
    };
  });
  
When('eu crio o pet', async function () {
  response = await request(baseUrl).post('').send(this.novoPet);
});

Then('o pet deve ser criado com sucesso', function () {
  assert.strictEqual(response.status, 201);
});

Given('que eu tenho pets cadastrados', function () {
  // Aqui você pode simular dados se quiser, ou só seguir direto pro GET
});

When('eu solicito a lista de pets', async function () {
  response = await request(baseUrl).get('');
});

Then('a lista de pets deve ser retornada', function () {
  assert.strictEqual(response.status, 200);
});
