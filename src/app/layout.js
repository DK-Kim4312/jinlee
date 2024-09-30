import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Jin Lee",
  description: "Passionate Fashion Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>JinLee</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div className="frame">
          <nav className="navigator">
            <h3 className="site-name">
              <a href="/">LEE YEJIN</a>
            </h3>
            <ul>
              <li>
                <a href="/shop" className="nav-menu">SHOP</a>
              </li>
              <li>
                <a href="/collection" className="nav-menu">COLLECTION</a>
              </li>
              <li>
                <a href="/work" className="nav-menu">WORK</a>
              </li>
            </ul>
          </nav>
          <div className="content-area">

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
