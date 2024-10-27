import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/myspace/navbar/Navbar";
import Footer from "./components/myspace/footer/Footer";

// import Bio from "./components/myspace/(side one)/bio/Bio";
import Contact from "./components/myspace/(side one)/contact/Contact";
import TechStack from "./components/myspace/(side one)/techStack/TechStack";


export const metadata: Metadata = {
  title: "Kaesy Nock Portfolio",
  description: "a portfolio website for Kaesy Nock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<body>
				<Navbar />
				{/* <Bio /> */}
				<Contact />
				<TechStack />
				{children}
				<Footer />
			</body>
		</html>
	);
}
