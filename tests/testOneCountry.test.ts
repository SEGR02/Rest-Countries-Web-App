const MockAdapter2 = require("axios-mock-adapter");
const axios2 = require("axios");
const mock2 = new MockAdapter2(axios2);

async function fetchDataByCountryCode(countryCode: string) {
  try {
    const response = await axios2.get(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    return response.data;
  } catch (err: any) {
    console.error("Error al obtener datos del país:", err.message);
    return { error: "Error al obtener datos del país" };
  }
}

describe("Country Data API Test", () => {
  it("should fetch and process data from the country data API", async () => {
    const mockData = {
      name: {
        common: "Venezuela",
        official: "Bolivarian Republic of Venezuela",
      },
      population: 28435943,
      tld: [".ve"],
    };
    mock2.onGet(`https://restcountries.com/v3.1/alpha/ve`).reply(200, mockData);
    const result = await fetchDataByCountryCode("ve");
    expect(result.tld).toEqual([".ve"]);
  });
});
