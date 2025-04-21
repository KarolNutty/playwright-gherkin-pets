Feature: Pets API

  Scenario: Criar um pet
    Given que eu tenho os dados de um novo pet
    When eu crio o pet
    Then o pet deve ser criado com sucesso

  Scenario: Listar pets
    Given que eu tenho pets cadastrados
    When eu solicito a lista de pets
    Then a lista de pets deve ser retornada
