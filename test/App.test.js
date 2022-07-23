// Basic example of an integration test over the "App" component.
// Extend this as necessary to depict your test scenario.
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import server from "../src/mocks/server";
import { rest } from "msw";

test("passes", async () => {
  server.use(
    rest.get("https://made.up/api/usage", (req, res, ctx) => {
      return res.once(
        ctx.status(301),
        ctx.json({
          id: 2,
          firstName: "John Doe"
        })
      );
    })
  );
  render(<App />);

  expect(
    // Expect the mocked response to be present in the DOM.
    await screen.findByText(`{"id":1,"firstName":"John"}`)
  ).toBeInTheDocument();
});
