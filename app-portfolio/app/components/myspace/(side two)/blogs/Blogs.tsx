// import { useRouter } from 'next/navigation.js';
import Link from 'next/link'
import React from 'react'
import { Posts } from "./index.js";



const Blogs = () => {


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
							<Link href="./blogpostone/page.tsx">(view more)</Link>
						</li>
						<li className="mb-4">
							{Posts[1].title}
							<Link  href="./blogposttwo/page.tsx">(view more)</Link>
						</li>
						<li className="mb-4">
							{Posts[2].title}
							<Link href="./blogpostthree/page.tsx">(view more)</Link>
					  </li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Blogs;
