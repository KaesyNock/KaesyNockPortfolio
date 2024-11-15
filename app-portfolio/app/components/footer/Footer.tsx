import Image from "next/image";
import logo from "../../../public/logos/logo.png";
import { ContactLinks } from "../../constants";

const Footer = () => {
	return (
		<footer className="flex-col bg-navbar">
			<Image
				className="pt-4 md:pb-4 ml-10"
				src={logo}
				alt="kaesynocklogo"
				width={40}
				height={40}
				priority
			/>
			<div className="p-2 flex-col-2 justify-center">
				<ul className="">
					{ContactLinks.map((contacts) => (
						<li className="" key={contacts.id}>
							<a
								className=" text-navbar-text text-center pl-2 pr-2 "
								href={contacts.url}>
								{contacts.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
