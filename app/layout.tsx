import "./globals.css";
import type { Metadata } from "next";
import DarkMode from "./components/DarkMode";
export const metadata: Metadata = {
  title: "Student Management",
  description: "Book borrow app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-300 dark:bg-slate-950 relative">
        {children}
      </body>
    </html>
  );
}
