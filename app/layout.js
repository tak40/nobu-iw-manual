export const metadata = {
  title: 'Nobu IW Training Manual',
  description: 'BNP Paribas Open 2026 — Server Training Manual',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
