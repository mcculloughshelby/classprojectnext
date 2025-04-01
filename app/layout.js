import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body      >
        <h1>Hello From CIS 498</h1>
        {children}
      </body>
    </html>
  );
}
