import React from 'react'
import NBanner from "@/public/NBanner.svg";
import Image from 'next/image'
import NBannerOld from "@/public/NBannerOld.svg";

const Bio = () => {
	return (
		<div className="ml-10">
			<div className="mt-10 text-4xl text-align-center">Kaesy Nock</div>
			<h5 className="text-bold">Full Stack Developer</h5>
			<div className="flex align-items-center gap-5 ">
				<Image
					priority={true}
					src={NBanner}
					alt="portfolioimage"
					width={275}
					height={200}
				/>
				<div className="pb-4">
					<h5 className="pb-3 text-xs pt-2">
						&quot;The best way to predict the <br /> future is to invent
						it&quot; -Alan Kay
					</h5>
					<p className="pb-4 text-xs">
						Female, 34, <br />
						Remote, US
					</p>
					<p className="pb-5 text-xs">
						Last Login:
						<br />
						<span className="text-sm">10/29/2024</span>
					</p>
					<h6 className="pb-1 text-xs">View My:</h6>
					<a href="https://github.com/kaesynock">Code</a>
				</div>
			</div>
		</div>
	);
}

export default Bio