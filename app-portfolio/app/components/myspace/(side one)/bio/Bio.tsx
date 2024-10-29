import React from 'react'
import NBanner from "../../../../../public/N-banner.svg";
import Image from 'next/image'

const Bio = () => {
	return (
		<div className="ml-10 w-2/5">
			<div className="mt-10 text-4xl text-align-center">Kaesy Nock</div>
			<h5 className="text-bold">Full Stack Developer</h5>
			<div className="flex align-items-center gap-5 mt-4">
				<Image src={NBanner} alt="portfolioimage" width={300} height={200} />
				<div className="pb-4">
					<h5 className="pb-4">
						&quot;The best way to predict the <br /> future is to invent
						it&quot; -Alan Kay
					</h5>
					<p className="pb-4">Female, 34, <br />Remote, US</p>
					<p className="pb-8">
						Last Login:
						<br />
						<span className="text-sm">10/29/2024</span>
					</p>
					<h6 className="pb-1">View My:</h6>
					<a href="https://github.com/kaesynock">Code</a>
				</div>
			</div>
		</div>
	);
}

export default Bio