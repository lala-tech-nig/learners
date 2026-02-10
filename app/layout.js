import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "LearnersHub - Personalized 1-on-1 Learning Platform",
  description: "Experience the power of one-on-one learning. Connect with expert instructors for personalized courses tailored to your goals. No pre-recorded videos, just live, interactive sessions.",
  keywords: "one-on-one learning, personalized education, live courses, expert instructors, online learning platform",
  openGraph: {
    title: "LearnersHub - Personalized 1-on-1 Learning",
    description: "Master new skills with personalized one-on-one instruction from expert teachers.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
