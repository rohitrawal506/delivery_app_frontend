import { CartProvider } from "src/context/cart-context";
import "./globals.css";
import { AuthProvider } from "src/context/auth-context";

export const metadata = {
  title: "Food Max - Online food delivery app",
  description: "online food delivery app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
      </body>
    </html>
  );
}
