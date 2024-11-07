import Image from "next/image.js";
import oneImage from "../../../public/1.jpg";
import twoImage from "../../../public/2.jpg";
import threeImage from "../../../public/3.jpg";
import fourImage from "../../../public/4.jpg";
import fiveImage from "../../../public/5.jpg";
import sixImage from "../../../public/6.jpg";
import sevenImage from "../../../public/7.jpg";
import eightImage from "../../../public/8.jpg";
import Link from "next/link";

const Projects = () => {
	return (
		<div>
			<div className="ml-60 w-3/5">
				<div className="container">
					<div className="bg-title-B-background text-title-B-text font-bold mt-8 p-1 pl-4">
						<h4>Kaesy&apos;s Top 8 (Projects)</h4>
					</div>
					<div>
						<ul className="grid gap-2 grid-cols-4 grid-rows-2 content-center ml-10 mt-8 mr-10">
							<li>
								<Link className="text-center" href="/">
									Health and Wellness Booking App
								</Link>
								<Image src={oneImage} alt="image1" width={200} height={100} />
							</li>
							<li>
								<Link className="" href="/">
									Multi-Template Blog App
								</Link>
								<Image src={twoImage} alt="image1" width={200} height={100} />
							</li>
							<li>
								<Link className="" href="/">
									Expense Tracker
								</Link>
								<Image src={threeImage} alt="image1" width={200} height={100} />
							</li>
							<li>
								<Link className="" href="/">
									Grocery Delivery App
								</Link>
								<Image src={fourImage} alt="image1" width={200} height={100} />
							</li>
							<li className="">
								<Link className="" href="/">
									Lyft Clone
								</Link>
								<Image src={fiveImage} alt="image1" width={200} height={100} />
							</li>
							<li>
								<Link className="" href="/">
									Music Player
								</Link>
								<Image src={sixImage} alt="image1" width={200} height={100} />
							</li>
							<li>
								<Link className="" href="/">
									Expense Tracker
								</Link>
								<Image src={sevenImage} alt="image1" width={200} height={100} />
							</li>
							<li>
								<Link className="" href="/">
									E-commerce Site
								</Link>
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
