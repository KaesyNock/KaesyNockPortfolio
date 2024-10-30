import { Blogs } from "./index.js";

const HomePageBlogs = () => {
	return (
		<div className="ml-60 w-3/5">
			<div className="above title container"></div>
			<div className="bg-title-B-background text-title-B-text font-bold mt-8 p-1 pl-4 ">
				<h6>Kaesy&apos;s Latest Blog Entries</h6>
			</div>
			<div className="ml-10 mt-5 mb-5">
				<ul>
					{Blogs.map((blogs) => (
						<li key={blogs.id}>
                            <span className="font-bold">{blogs.title}
                            </span>
							
                            <a href={blogs.href}>view more</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default HomePageBlogs;
