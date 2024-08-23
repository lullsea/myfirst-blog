import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function ArticleLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="/" className="absolute ml-[1vw] mt-4 text-4xl rounded-full text-center w-10 h-10 inline-block hover:bg-gray-300 transition-all">￩</a>
        <div className="w-3/5 mx-auto min-w-[350px] pb-20">{children}</div>
        </body>
    </html>
  );
}
