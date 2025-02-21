import "./css/style.css";

import { Onest } from "next/font/google";
import Header from "@/components/ui/header";

const onest = Onest({
  subsets: ["latin"]
});


export const metadata = {
  title: "SparkMask Solutions",
  description: "Leading the future of privacy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${onest.className} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
