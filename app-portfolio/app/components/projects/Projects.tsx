import Image from "next/image.js";
import spa from "../../../public/spa.svg";
import blog from "../../../public/book.svg";
import expense from "../../../public/expensetracker.svg";
import taskmanager from "../../../public/taskmanager.svg";
import groceries from "../../../public/groceries.svg";
import ecommerce from "../../../public/e-commerce.svg";
import music from "../../../public/music.svg";
import lyftclone from "../../../public/lyftclone.svg";
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
						<ul className="grid gap-2 grid-cols-4 grid-rows-2 text-center content-center ml-10 mt-8 mr-10">
							<li className="text-center">
								<Link className="text-center" href="/">
									Spa Booking App
								</Link>
								<Image src={spa} alt="image1" width={200} height={200} />
							</li>
							<li>
								<Link className="text-center" href="/">
									Multi-Template Blog App
								</Link>
								<Image src={blog} alt="image1" width={200} height={100} />
							</li>
							<li>
								<Link className="text-center" href="/">
									Expense Tracker
								</Link>
								<Image src={expense} alt="image1" width={200} height={100} />
							</li>
							<li>
								<Link className="text-center" href="/">
									Grocery Delivery App
								</Link>
								<Image src={groceries} alt="image1" width={200} height={100} />
							</li>
							<li className="">
								<Link className="text-center" href="/">
									Lyft Clone
								</Link>
								<Image src={lyftclone} alt="image1" width={200} height={100} />
							</li>
							<li>
								<Link className="text-center" href="/">
									Music Player
								</Link>
								<Image src={music} alt="image1" width={200} height={100} />
							</li>
							<li>
								<Link className="text-center" href="/">
									Task Manager
								</Link>
								<Image
									src={taskmanager}
									alt="image1"
									width={200}
									height={100}
								/>
							</li>
							<li>
								<Link className="text-center" href="/">
									E-commerce Site
								</Link>
								<Image src={ecommerce} alt="image1" width={200} height={100} />
							</li>
						</ul>
						<p className="text-xs text-center mt-6 mb-[(-4)]">
							*Projects are coming. I have recently taken several
							illuminating courses and I am now taking the time to refine all of
							my favorite projects. Thank you for your patience.*
							<br />
							*Routes are temporarily routed to home*
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
