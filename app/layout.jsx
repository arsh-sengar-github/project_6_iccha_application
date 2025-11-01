import "./globals.css";
import { Jura } from "next/font/google";
import { IdeaContext } from "@/contexts/ideaContext";
import TopBar from "@/components/custom/topbar";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Iccha",
  description: "Where ideas are named.",
};

const juraFont = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${juraFont.className} antialiased`}>
        <IdeaContext>
          <TopBar />
          <Toaster />
          {children}
        </IdeaContext>
      </body>
    </html>
  );
}
