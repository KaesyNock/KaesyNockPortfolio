import Image from "next/image";

import LinkedInIcon from "@/public/icons/linkedinIcon.svg";
import GitHubIcon from "@/public/icons/githubIcon.svg";
import EmailIcon from "@/public/icons/emailIcon.svg";
import YouTubeIcon from "@/public/icons/youtubeIcon.svg";

const Contact = () => {
	return (
		<div className="sideOne">
			<div className="container">
				<div className="table ml-10 border-2 border-border-A border-separate text-left mt-3 mb-3 w-full">
					<div className="table-header bg-title-A-background text-rootBackground text-left font-bold pl-2">
						Contacting Kaesy
					</div>
					<div className="table-body ml-2 p-1 mt-2 mb-3">
						<div className="table-row-group">
							<div className="table-cell text-xs  ">
								<a className="p-2 pl-2 mb-2 pb-3" href="mailto:kaesynock@gmail">
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
							<div className="table-cell text-xs mb-3 ">
								<a
									className="table-cell p-2"
									href="https://www.github.com/kaesynock">
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
								<div className="table-cell text-xs ">
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
								<div className="table-cell  text-xs ">
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

export default Contact;
