import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My App - GitHub Pages",
  description: "A Next.js app with shadcn/ui sidebar deployed to GitHub Pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
