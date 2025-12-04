"use client";

export default function Error({ error, reset }) {
  console.error("SLUG PAGE ERROR:", error);

  return (
    <div style={{ padding: "50px", fontFamily: "monospace" }}>
      <h1>Something went wrong!</h1>
      <h2>Error Message:</h2>
      <pre
        style={{
          background: "#ffebee",
          padding: "20px",
          overflow: "auto",
          color: "#c62828",
        }}
      >
        {error.message}
      </pre>
      <h2>Stack Trace:</h2>
      <pre
        style={{
          background: "#f5f5f5",
          padding: "20px",
          overflow: "auto",
          fontSize: "12px",
        }}
      >
        {error.stack}
      </pre>
      <button
        onClick={() => reset()}
        style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}
      >
        Try again
      </button>
    </div>
  );
}
