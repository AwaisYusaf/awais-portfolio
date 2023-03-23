import "./globals.css";

export const metadata = {
  title: "Awais Yusaf | Portfolio",
  description: "Web Developer, Nextjs Developer, MERN Developer, Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
