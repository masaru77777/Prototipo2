import "./globals.css";

export const metadata = {
  title: "Sistema de Votaciones",
  description: "Prototipo de votación electrónica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}