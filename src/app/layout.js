import localFont from "next/font/local";
import Layout from "@/components/layout/Layout";
import "./globals.css";
import { ToastProvider } from "@/context/toastContext";
import { UserProvider } from "@/context/UserContext";

const yekan = localFont({
  src: [
    {
      path: "../../public/fonts/YekanBakh-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Fat.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
});

export const metadata = {
  title: "تورینو",
  description: "تورینو برگزار کننده بهترین تورهای داخلی و خارجی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${yekan.variable}`}>
      <body>
        <ToastProvider>
          <UserProvider>
            <Layout>{children}</Layout>
          </UserProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
