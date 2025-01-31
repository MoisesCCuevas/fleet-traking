import ThemeProvider from "@components/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "Fleet Traking",
  description: "A fleet tracking application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
