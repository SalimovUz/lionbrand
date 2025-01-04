import "./globals.css";
import favicon from "@/public/judo.jpg";

export const metadata = {
  title: "Lion Brand",
  description: "Created by Salimov",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/judo.jpg" type="image/jpeg" />
      </head>
      <body className="">{children}</body>
    </html>
  );
}
