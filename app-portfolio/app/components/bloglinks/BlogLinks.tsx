import { Posts } from "./index";
import Link from "next/link";

export default function BlogLinks() {
	return (
		<div>
			<div className="ml-60 w-3/5">
				<div className="above title container"></div>
				<div className="bg-title-B-background text-title-B-text font-bold mt-8 p-1 pl-4">
					<h6>Kaesy&apos;s Latest Blog Entries</h6>
				</div>
				<div className="ml-10 mt-5 mb-5">
					<ul className="mb-4">
						<li className="mb-4">
							{Posts[0].title}
							<Link href="./blogs/blogpostone">(view more)</Link>
						</li>
						<li className="mb-4">
							{Posts[1].title}
							<Link href="./blogs/blogposttwo">(view more)</Link>
						</li>
						<li className="mb-4">
							{Posts[2].title}
							<Link href="./blogs/blogpostthree">(view more)</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
