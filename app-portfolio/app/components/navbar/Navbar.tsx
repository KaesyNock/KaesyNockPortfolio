"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../../public/logos/logo.png";

import {  MobileItems } from "../../constants";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<nav className="sticky bg-navbar left-0 top-0 w-full z-10 ">
			{/* <div className="max-w-[1240px] m-auto "> */}
			<div className="flex-row bg-navbar">
				<Image
					className="pt-4 pb-4 md:ml-10"
					src={Logo}
					alt="kaesynocklogo"
					width={80}
					height={80}
					priority
				/>

				<div className="hidden md:bg-title-A-background md:flex md:flex-row md:justify-center  ">
					<ul className="flex divide-x-2 divide-solid divide-navbar-text">
						{MobileItems.map((items) => (
							<li className="" key={items.id}>
								<a
									className=" text-navbar-text text-center p-2"
									href={items.path}>
									{items.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* </div> */}

			{/* Mobile Button */}
			<div
				onClick={handleNav}
				className="block md:hidden z-10 absolute top-6 right-6">
				{nav ? (
					<AiOutlineClose size={20} style={{ color: "white" }} />
				) : (
					<AiOutlineMenu size={20} style={{ color: "white" }} />
				)}
			</div>
			{/* Mobile Menu */}
			<div
				className={
					nav
						? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-title-A-background text-center   ease-in duration-300"
						: "md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-title-A-background text-center ease-in duration-300"
				}>
				<ul className="bg-navbar-text border-2 border-border-A border-separate text-4xl">
					{MobileItems.map((item) => (
						<li onClick={handleNav} className="p-4 text-4xl" key={item.id}>
							<Link href={item.path}>{item.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
