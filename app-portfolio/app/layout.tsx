import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


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
					{children}
				<Footer />
			</body>
		</html>
	);
};
