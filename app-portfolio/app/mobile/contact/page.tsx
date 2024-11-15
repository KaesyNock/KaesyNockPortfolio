import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from "@/public/icons/linkedinIcon.svg";
import GitHubIcon from "@/public/icons/githubIcon.svg";
import EmailIcon from "@/public/icons/emailIcon.svg";
import CalendarIcon from "@/public/icons/calendarIcon.svg";

const Contact = () => {
	return (
		<div className="table ml-10 border-2 border-border-A border-separate text-left mt-3 mb-3 w-full md:hidden">
			<div className="table-header bg-title-A-background text-rootBackground text-left font-bold pl-2">
				Contacting Kaesy
			</div>
			<div className="table-body m-3">
				<div className="table-row-group">
					<div className="table-row">
						<div className="table-cell">
							<a
								className="pb-2 text-[11px] mr-2"
								href="mailto:kaesynock@gmail">
								<Image
									className="mr-1 inline-table"
									src={EmailIcon}
									alt="email icon"
									width={25}
									height={20}
									title="Send Message"
								/>
								Send Message
							</a>
						</div>
						<div className="table-cell">
							<Link
								className="table-cell text-[11px] pb-1"
								href="https://www.github.com/kaesynock">
								<Image
									className="pr-1 pb-2 ml-2 inline-table"
									src={GitHubIcon}
									alt="GitHub Icon"
									width={25}
									height={25}
								/>
								Forward to a Friend
							</Link>
						</div>
					</div>
					<div className="table-row">
						<div className="table-cell">
							<Link href="https://www.linkedin.com/in/kaesynock/">
								<Image
									className="inline-table"
									src={LinkedInIcon}
									alt="linkedin icon"
									width={20}
									height={20}
								/>
								<div className="text-[11px] mr-3">Add to Friends</div>
							</Link>
						</div>
						<div className="table-cell">
							<Link href="https://calendly.com/kaesynock">
								<Image
									className=" inline-table ml-2"
									src={CalendarIcon}
									alt="youtube icon"
									width={20}
									height={20}
								/>
								<div className="inline-table text-[11px] mr-4">
									Add to Favorites
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
