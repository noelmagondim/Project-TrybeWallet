const URL = 'https://economia.awesomeapi.com.br/json/all';

const getCurrency = async () => {
  const response = await fetch(URL);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default getCurrency;

// Inspirado no repositório de aulas do professor Braddock.
// Criei este arquivo para auxiliar na resolução do desafio 04.
// Com ele evita que eu implemente a lógica de chamar a API tudo dentro da action, eu poderia fazer tudo junto mas optei por separar para ficar mais organizado
