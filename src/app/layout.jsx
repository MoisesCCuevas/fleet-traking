import ThemeProvider from "@providers/ThemeProvider";
import UiProvider from "@providers/UiProvider";
import "./globals.css";

export const metadata = {
  title: "Fleet Tracking",
  description: "A fleet tracking application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <UiProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </UiProvider>
      </body>
    </html>
  );
}
