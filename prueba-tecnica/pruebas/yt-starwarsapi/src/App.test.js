import { render, screen } from '@testing-library/react';
import App from './App';
import data from "./data.json";

describe("Star wars App", () => {

  it("Should show a list of characters from the API", async () => {
    window.fetch({
      ok: true,
      json: async () => data,
    });
    render(<App/>);
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith("https://swapi.dev/api/people/");

    for (let character of data.results) {
      expect(await screen.findByText(character.name)).toBeInTheDocument();
    }
  });

  it("Should show an error message when has a network error", async () => {
    window.fetch(new Error("Network Error"));
    render(<App/>);
    expect(await screen.findAllByText("Network Error")).toBeInTheDocument();
  });
});


