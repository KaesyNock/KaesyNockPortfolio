import Bio from "./components/bio/Bio";
import Contact from "./components/contact/Contact";
import TechStack from "./components/techStack/TechStack";
import Education from "./components/education/Education";
import History from "./components/job-history/History";
import About from "./components/about/About";
import BlogLinks from "./components/bloglinks/BlogLinks";
import Projects from "./components/projects/Projects";
import CommentsContainer from "./components/comments/Comments";
import ExtendedNetwork from "./components/extended/extended";

export default function Home() {
	return (
		<div className="flex">
			<div className="flex-1">
				<Bio />
				<Contact />
				<TechStack />
				<Education />
				<History />
			</div>
			<div className="flex-2">
				<ExtendedNetwork />
				<BlogLinks />
				<About />
				<Projects />
				<CommentsContainer />
			</div>
		</div>
	);
}
