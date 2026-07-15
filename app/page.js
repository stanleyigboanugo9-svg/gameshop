"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  function handleAnalyze() {
    if (!url) return;
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setResult({
        score: 78,
        tips: [
          {
            label: "Call-to-action",
            detail: "Your main CTA isn't visible without scrolling.",
          },
          {
            label: "Page speed",
            detail: "Load time is likely costing you mobile conversions.",
          },
          {
            label: "Tracking",
            detail: "No pixel or conversion tracking detected on this page.",
          },
        ],
      });
      setLoading(false);
    }, 900);
  }

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <div style={styles.badge}>Website Audit</div>
        <h1 style={styles.heading}>How well does your site convert?</h1>
        <p style={styles.subheading}>
          Paste a URL and get an instant score with clear, actionable
          recommendations.
        </p>

        <div style={styles.inputRow}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://yourwebsite.com"
            style={styles.input}
            onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
          />
          <button
            onClick={handleAnalyze}
            disabled={loading || !url}
            style={{
              ...styles.button,
              opacity: loading || !url ? 0.6 : 1,
              cursor: loading || !url ? "default" : "pointer",
            }}
          >
            {loading ? "Analyzing…" : "Analyze"}
          </button>
        </div>

        {result && (
          <div style={styles.resultCard}>
            <div style={styles.scoreRow}>
              <div style={styles.scoreCircle}>{result.score}</div>
              <div>
                <div style={styles.scoreLabel}>Site Score</div>
                <div style={styles.scoreSub}>out of 100</div>
              </div>
            </div>

            <div style={styles.tipsList}>
              {result.tips.map((tip, i) => (
                <div key={i} style={styles.tipRow}>
                  <div style={styles.tipDot} />
                  <div>
                    <div style={styles.tipLabel}>{tip.label}</div>
                    <div style={styles.tipDetail}>{tip.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "radial-gradient(circle at 20% 20%, #f4f4ff 0%, #ffffff 45%, #ffffff 100%)",
    padding: "40px 20px",
  },
  container: {
    width: "100%",
    maxWidth: 520,
    textAlign: "center",
  },
  badge: {
    display: "inline-block",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#5b4bff",
    background: "#efecff",
    padding: "6px 14px",
    borderRadius: 999,
    marginBottom: 20,
  },
  heading: {
    fontSize: 36,
    fontWeight: 700,
    lineHeight: 1.2,
    margin: "0 0 12px",
    color: "#111",
    letterSpacing: -0.5,
  },
  subheading: {
    fontSize: 16,
    color: "#666",
    margin: "0 0 32px",
    lineHeight: 1.5,
  },
  inputRow: {
    display: "flex",
    gap: 10,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    padding: "14px 16px",
    fontSize: 15,
    borderRadius: 10,
    border: "1px solid #e0e0e6",
    outline: "none",
    background: "#fff",
    boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
  },
  button: {
    padding: "14px 24px",
    fontSize: 15,
    fontWeight: 600,
    borderRadius: 10,
    border: "none",
    background: "#111",
    color: "#fff",
    whiteSpace: "nowrap",
  },
  resultCard: {
    marginTop: 32,
    padding: 28,
    borderRadius: 16,
    border: "1px solid #eee",
    background: "#fff",
    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
    textAlign: "left",
  },
  scoreRow: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginBottom: 24,
    paddingBottom: 24,
    borderBottom: "1px solid #f0f0f0",
  },
  scoreCircle: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "#111",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: 700,
    flexShrink: 0,
  },
  scoreLabel: {
    fontSize: 16,
    fontWeight: 600,
    color: "#111",
  },
  scoreSub: {
    fontSize: 13,
    color: "#999",
  },
  tipsList: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  tipRow: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
  },
  tipDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#5b4bff",
    marginTop: 6,
    flexShrink: 0,
  },
  tipLabel: {
    fontSize: 14,
    fontWeight: 600,
    color: "#111",
    marginBottom: 2,
  },
  tipDetail: {
    fontSize: 14,
    color: "#666",
    lineHeight: 1.4,
  },
};
