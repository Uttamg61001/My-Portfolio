import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Jost } from "next/font/google";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const jost = Jost({
  subsets: ["latin"],
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={cn("min-h-screen flex flex-col", jost.className)}>
      <Header />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
