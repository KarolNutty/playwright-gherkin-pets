# Testes Automatizados para API de Pets com Playwright e Gherkin

Este repositório contém uma **automação de testes** utilizando **Playwright** e **Gherkin** para testar a [API de Pets](https://github.com/KarolNutty/api-de-pets). O objetivo deste projeto é garantir que as funcionalidades da API estejam corretas, utilizando uma abordagem de testes com **BDD (Behavior-Driven Development)**, utilizando **Cucumber** para Gherkin.

### Tecnologias Usadas

- **Node.js**: Para execução do JavaScript.
- **Playwright**: Ferramenta para automação de navegadores (usada para testes de API).
- **Gherkin**: Linguagem de especificação para testes BDD.
- **Cucumber.js**: Framework para testes comportamentais usando Gherkin.
- **Supertest**: Biblioteca para realizar requisições HTTP em testes de integração.
- **Postman**: Ferramenta para testar manualmente a API.
  
### Funcionalidades da API

A **API de Pets** foi construída para realizar operações CRUD (Create, Read, Update, Delete) com dados de pets. As rotas disponíveis são:

- **GET** `/api/pets`: Retorna todos os pets cadastrados.
- **POST** `/api/pets`: Cria um novo pet.
- **PUT** `/api/pets/{id}`: Atualiza os dados de um pet.
- **DELETE** `/api/pets/{id}`: Deleta um pet.

Para mais detalhes sobre a API, acesse o repositório da [API de Pets](https://github.com/KarolNutty/api-de-pets).

### Como Rodar os Testes

Siga os passos abaixo para rodar os testes automatizados da API de Pets utilizando Playwright e Gherkin:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/KarolNutty/playwright-gherkin-pets.git
   cd playwright-gherkin-pets
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Suba a API de Pets**:
   Antes de rodar os testes, é necessário ter a API de Pets rodando. Caso não tenha feito isso, siga as instruções no repositório da [API de Pets](https://github.com/KarolNutty/api-de-pets).

4. **Rodar os testes**:
   Com a API de Pets rodando, execute os testes com o comando:
   ```bash
   npm test
   ```

5. **Verificar os resultados**:
   Após rodar o comando acima, você verá a execução dos testes na sua linha de comando. Se tudo estiver certo, os testes irão passar e você verá algo como:

   ```bash
   ...... 
   2 scenarios (2 passed)
   6 steps (6 passed)
   0m00.178s (executing steps: 0m00.164s)
   ```

### Estrutura de Testes

Os testes estão organizados dentro da pasta `tests/` e são definidos de acordo com a linguagem Gherkin. Cada teste é especificado em um arquivo `.feature` e implementado nos arquivos de steps.

#### Exemplo de Feature

O arquivo `pets.feature` dentro da pasta `tests/features/` descreve os cenários de teste:

```gherkin
Feature: Cadastro de Pets na API

  Scenario: Criar um pet
    Given que eu tenho os dados de um novo pet
    When eu crio o pet
    Then o pet deve ser criado com sucesso

  Scenario: Listar pets
    Given que eu tenho pets cadastrados
    When eu solicito a lista de pets
    Then a lista de pets deve ser retornada
```

#### Exemplo de Step

Os passos (steps) são definidos no arquivo `pets.steps.js` dentro da pasta `tests/steps/`:

```javascript
const assert = require('assert');
const request = require('supertest');
const { Given, When, Then } = require('@cucumber/cucumber');

const baseUrl = 'http://localhost:3000/api/pets';

let response;

Given('que eu tenho os dados de um novo pet', function () {
  this.novoPet = {
    nome: 'Rex',
    especie: 'Cachorro',
    idade: 3
  };
});

When('eu crio o pet', async function () {
  response = await request(baseUrl).post('').send(this.novoPet);
});

Then('o pet deve ser criado com sucesso', function () {
  assert.strictEqual(response.status, 201);
});
```

### Testando com Postman

Você pode testar manualmente a API de Pets com o Postman. Para isso, use os seguintes endpoints:

- **POST** `http://localhost:3000/api/pets`: Para criar um novo pet. No corpo da requisição, envie os dados do pet no formato JSON:
  ```json
  {
    "nome": "Rex",
    "especie": "Cachorro",
    "idade": 3
  }
  ```
- **GET** `http://localhost:3000/api/pets`: Para listar todos os pets cadastrados.

### Conclusão

Este repositório oferece uma maneira prática de automatizar os testes da API de Pets utilizando Playwright e Gherkin, ajudando a garantir a qualidade do código da API. Não deixe de verificar o repositório da [API de Pets](https://github.com/KarolNutty/api-de-pets) para mais informações sobre a implementação da API!

Se você tiver alguma dúvida ou sugestão, fique à vontade para abrir uma **issue** ou **pull request**. 😊


