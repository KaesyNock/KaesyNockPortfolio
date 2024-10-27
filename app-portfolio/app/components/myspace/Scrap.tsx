import Image from "next/image";

import LinkedInIcon from "@/public/assets/icons/linkedinIcon.svg";
import GitHubIcon from "@/public/assets/icons/githubIcon.svg";
import EmailIcon from "@/public/assets/icons/emailIcon.svg";
import YouTubeIcon from "@/public/assets/icons/youtubeIcon.svg";

const Scrap = () => {
	return (
		<div className="sideOne">
			<div className="container">
				<div className="table pb-3 ml-10 border-2 border-border-A border-separate text-left mt-5 mb-5">
					<div className="table-header bg-title-A-background text-rootBackground text-left font-bold pl-2">
						Contacting Kaesy
					</div>
					<div className="table-body">
						<div className="table-row-group pl-2">
							<div className="table-cell  text-xs p-2 ">
								<a className="p-2 pl-2" href="mailto:kaesynock@gmail">
									<Image
										className="pr-2 inline-table"
										src={EmailIcon}
										alt="email icon"
										width={30}
										height={25}
										title="Send Message"
									/>
									Send Message
								</a>
							</div>
							<div className="table-cell text-xs p-2">
								<a
									className="table-cell p-2"
									href="https://www.linkedin.com/in/kaesynock/">
									<Image
										className="pr-2 inline-table"
										src={GitHubIcon}
										alt="linkedin icon"
										width={30}
										height={25}
									/>
									Forward to a Friend
								</a>
							</div>
							<div className="table-row">
								<div className="table-cell text-xs p-2">
									<a href="https://www.linkedin.com/in/kaesynock/">
										<Image
											className="ml-1 pr-2 inline-table"
											src={LinkedInIcon}
											alt="linkedin icon"
											width={30}
											height={30}
										/>
										<div className="pr-3">Add to Friends</div>
									</a>
								</div>
								<div className="table-cell  text-xs p-2">
									<a href="/">
										<Image
											className="ml-2 pr-2 inline-table"
											src={YouTubeIcon}
											alt="youtube icon"
											width={30}
											height={30}
										/>
										<div className="pr-8 inline-table">Add to Favorites</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Scrap;
