export const metadata = {
  title: "Site Score — Manual Build",
  description: "A hand-built version of the audit tool, no v0.dev involved.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
