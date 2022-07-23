import React from "react";
import { useFetch } from "./useFetch";

export default function App() {
  // Fetch the data
  const { loading, error, data } = useFetch("https://made.up/api/usage");

  // Handle the loading state
  if (loading) {
    return <p>Fetching data</p>;
  }

  // And the error state
  if (error) {
    return (
      <div>
        <p>Error: {error.message || error}</p>
        <small>Refresh the page if this error is unintentional.</small>
      </div>
    );
  }

  // Finally, render JSX with the response data
  return (
    <div className="App">
      <h1>API mocking example</h1>
      <code>{data}</code>
      <p>
        <small>
          Edit <code>src/mocks/handlers.js</code> with your logic.
        </small>
      </p>
    </div>
  );
}
