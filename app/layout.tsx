import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrendRiff",
  description: "Twitter Clone for educational purposes created by Aman Yadav",
};

export default function RootLayout({
  children,
  params: { session, ...params },
}: Readonly<{
  children: React.ReactNode;
  params: {
    session: any;
  };
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Toaster />
          <RegisterModal />
          <LoginModal />
          <Layout>{children}</Layout>
        </SessionProvider>
      </body>
    </html>
  );
}
