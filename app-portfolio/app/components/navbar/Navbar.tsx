import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logos/logo.png";
import { ContactLinks, ComponentLinks } from "../constants";

const Navbar = () => {
	return (
		<nav className="flex-row bg-navbar">
			<Image
				className="pt-4 pb-4 ml-10"
				src={logo}
				alt="kaesynocklogo"
				width={80}
				height={80}
				priority
			/>

			<div className="bg-title-A-background p-2 flex flex-row justify-center">
				<ul className="flex divide-x-2 divide-solid divide-navbar-text">
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
				<ul>
					{ComponentLinks.map((components) => (
						<li key={components.id}>
							<Link
								className=" text-navbar-text text-center pl-2 pr-2 "
								href={components.href}>
								{components.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
