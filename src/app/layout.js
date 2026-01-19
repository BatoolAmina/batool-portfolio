import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Batool Amina | Siemens SHIFT Winner & Full-Stack Developer",
  description: "Portfolio of Batool Amina, a B.Tech Computer Science student at Integral University (82% aggregate). Specialist in MERN Stack, Python, and winner of the Siemens Healthineers SHIFT Innovation program.",
  keywords: ["Batool Amina", "Full-Stack Developer Lucknow", "Integral University B.Tech", "Siemens SHIFT Winner", "MERN Stack Developer India"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#fcfdfc] text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}