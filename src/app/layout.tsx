import { Provider } from "react-redux";
import "@/global/globals.scss";
import { Inter } from "next/font/google";
import { store } from "@/shared/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Твоё дело",
  description: "Платформа для поиска стажировок",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider store={store}>{children}</Provider> */}
        {children}
      </body>
    </html>
  );
}
