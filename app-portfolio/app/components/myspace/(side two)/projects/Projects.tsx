import Image from "next/image.js";
import oneImage from "../../../../../public/1.jpg";
import twoImage from "../../../../../public/2.jpg";
import threeImage from "../../../../../public/3.jpg";
import fourImage from "../../../../../public/4.jpg";
import fiveImage from "../../../../../public/5.jpg";
import sixImage from "../../../../../public/6.jpg";
import sevenImage from "../../../../../public/7.jpg";
import eightImage from "../../../../../public/8.jpg";

const Projects = () => {
	return (
		<div>
			<div className="ml-60 w-3/5">
				<div className="container">
					<div className="bg-title-B-background text-title-B-text font-bold mt-8 p-1 pl-4">
						<h4>Kaesy&apos;s Top 8 (Projects)</h4>
					</div>
					<div>
						<ul className="grid gap-2 grid-cols-4 grid-rows-2 ml-10 mt-8 mr-10">
							<li>
								<a className="" href="/">
									Project 1
								</a>
								<Image src={oneImage} alt="image1" width={200} height={100} />
							</li>
							<li>
								<a className="" href="/">
									Project 2
								</a>
								<Image src={twoImage} alt="image1" width={200} height={100} />
							</li>
							<li>
								<a className="" href="/">
									Project 3
								</a>
								<Image src={threeImage} alt="image1" width={200} height={100} />
							</li>
							<li>
								<a className="" href="/">
									Project 4
								</a>
								<Image src={fourImage} alt="image1" width={200} height={100} />
							</li>
							<li className="">
								<a className="" href="/">
									Project 5
								</a>
								<Image src={fiveImage} alt="image1" width={200} height={100} />
							</li>
							<li>
								<a className="" href="/">
									Project 6
								</a>
								<Image src={sixImage} alt="image1" width={200} height={100} />
							</li>
							<li>
								<a className="" href="/">
									Project 7
								</a>
								<Image src={sevenImage} alt="image1" width={200} height={100} />
							</li>
							<li>
								<a className="" href="/">
									Project 8
								</a>
								<Image src={eightImage} alt="image1" width={200} height={100} />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
