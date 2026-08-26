"use client";
import Header from "@/app/ui/Header";
import CustomCursor from "@/app/ui/CustomCursor";
import Footer from "@/app/ui/Footer";
import "swiper/css";
import "swiper/css/pagination";
import "./scss/index.scss";
import { Poppins, Open_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--primary-font",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--secondary-font",
});

function formatPageName(pathname) {
  if (pathname === '/') return 'Home';
  const segment = pathname.split('/').filter(Boolean).pop();
  if (!segment) return 'Home';
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    document.title = `Imai - ${formatPageName(pathname)}`;
  }, [pathname]);

  useEffect(() => {
    const preventContextMenu = (event) => event.preventDefault();
    const preventDrag = (event) => event.preventDefault();
    const preventProductionShortcuts = (event) => {
      const key = event.key.toLowerCase();
      const modifier = event.ctrlKey || event.metaKey;

      if (
        key === 'f12' ||
        (modifier && ['s', 'u', 'p'].includes(key)) ||
        (modifier && event.shiftKey && ['i', 'j', 'c'].includes(key))
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('dragstart', preventDrag);

    if (process.env.NODE_ENV === 'production') {
      document.addEventListener('keydown', preventProductionShortcuts);
    }

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('dragstart', preventDrag);
      document.removeEventListener('keydown', preventProductionShortcuts);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="author" content="Laralink" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <Header />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
