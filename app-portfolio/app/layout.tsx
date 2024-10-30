import type { Metadata } from "next";
import "./globals.css";
// import Navbar from "./components/myspace/navbar/Navbar";
// import Footer from "./components/myspace/footer/Footer";

import Bio from "./components/myspace/(side one)/bio/Bio";
import Contact from "./components/myspace/(side one)/contact/Contact";
import TechStack from "./components/myspace/(side one)/techStack/TechStack";
import Scrap from "./components/myspace/Scrap";
import Education from "./components/myspace/(side one)/education/Education";
import History from "./components/myspace/(side one)/job-history/History";
import About from "./components/myspace/(side two)/about/About";
import HomePageBlogs from "./components/myspace/(side two)/blogs/HomePageBlogs";
import Projects from "./components/myspace/(side two)/projects/Projects";

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
				{/* <Navbar /> */}
				<div className="flex">
					<div className="flex-1">
					<Bio />
					<Scrap />
					<Contact />
					<TechStack />
					<Education />
						<History />
						</div>
					<div className="flex-2">
						<HomePageBlogs />
						<About />
						<Projects />
					</div>

					{children}
				</div>

				{/* <Footer /> */}
			</body>
		</html>
	);
}
