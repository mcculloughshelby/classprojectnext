import "./globals.css";
import { Provider } from "@/components/MyContext";
import NavBar from "./components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body      >
        <Provider> 
          <NavBar />
        {children}
        </Provider>
      </body>
    </html>
  );
}
