const MockAdapter = require("axios-mock-adapter");
const axios = require("axios");
const mock = new MockAdapter(axios);

async function requestCountries() {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
  } catch (er: any) {
    console.error("Error al obtener datos de la API:", er.message);
    return { error: "Error al obtener datos de la API" };
  }
}

describe("API Test", () => {
  it("should fetch and process data from the API", async () => {
    mock.onGet("https://restcountries.com/v3.1/all").reply(200, [
      { name: "USA", population: 331002651 },
      { name: "Canada", population: 37742154 },
      { name: "India", population: 1380004385 },
    ]);
    const result = await requestCountries();
    expect(result).toHaveLength(3);
    expect(result[0]).toHaveProperty("name", "USA");
  });
});
