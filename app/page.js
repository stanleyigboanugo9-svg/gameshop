"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  function handleAnalyze() {
    if (!url) return;
    // This is a mock result for now — real checks come later.
    setResult({
      score: 78,
      tips: [
        "Your call-to-action isn't visible without scrolling.",
        "Page load time is costing you mobile conversions.",
        "No pixel/tracking script detected on this page.",
      ],
    });
  }

  return (
    <main
      style={{
        maxWidth: 480,
        margin: "80px auto",
        padding: "0 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Site Score</h1>
      <p style={{ color: "#666", marginBottom: 24 }}>
        Enter a URL to get an instant score and quick recommendations.
      </p>

      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
        style={{
          width: "100%",
          padding: "10px 12px",
          fontSize: 16,
          borderRadius: 6,
          border: "1px solid #ccc",
          marginBottom: 12,
        }}
      />

      <button
        onClick={handleAnalyze}
        style={{
          width: "100%",
          padding: "10px 12px",
          fontSize: 16,
          borderRadius: 6,
          border: "none",
          background: "black",
          color: "white",
          cursor: "pointer",
        }}
      >
        Analyze
      </button>

      {result && (
        <div
          style={{
            marginTop: 32,
            padding: 20,
            border: "1px solid #eee",
            borderRadius: 8,
            textAlign: "left",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Score: {result.score}/100</h2>
          <ul>
            {result.tips.map((tip, i) => (
              <li key={i} style={{ marginBottom: 8 }}>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
