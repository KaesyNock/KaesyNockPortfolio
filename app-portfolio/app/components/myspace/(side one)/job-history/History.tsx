import React from "react";
import {
	ChiWah, NockOps, TragikDesign,
} from "./index.js";

const History = () => {
	return (
		<div>
			<div className="sideOne">
				<div className="container">
					<div className="table ml-10 border-2 border-border-A border-separate text-left mt-5 mb-5 w-1/5">
						<div className="table-header bg-title-A-background text-rootBackground text-left font-bold text- pl-2">
							Work History
						</div>
						<div className="table-body border-spacing-1">
							<div className="table-row-group pl-2">
								<div className="table-cell bg-colABackground text-colAText font-bold text-xs p-2 ">
									Chi Wah Organica
								</div>
								<div className="table-cell list-none bg-colBBackground text-colBText text-xs p-2">
									{ChiWah.map((chichi) => (
										<li key={chichi.id}>
											<div className="font-bold">{chichi.job_title}</div>
											<p className="pb-2">{chichi.job_description}</p>
											<p className="pb-2">{chichi.date}</p>
										</li>
									))}
								</div>
							</div>
							<div className="table-row-group pl-2">
								<div className="table-cell bg-colABackground text-colAText font-bold text-xs p-2 ">
									NockOps LLC
								</div>
								<div className="table-cell list-none bg-colBBackground text-colBText text-xs p-2">
									{NockOps.map((nockops) => (
										<li key={nockops.id}>
											<div className="font-bold">{nockops.job_title}</div>
											<p className="pb-2">{nockops.job_description}</p>
											<p className="pb-2">{nockops.date}</p>
										</li>
									))}
								</div>
							</div>
							<div className="table-row-group pl-2">
								<div className="table-cell bg-colABackground text-colAText font-bold text-xs p-2 ">
									Tragik Design LLC
								</div>
								<div className="table-cell list-none bg-colBBackground text-colBText text-xs p-2">
									{TragikDesign.map((tragik) => (
										<li key={tragik.id}>
											<div className="font-bold">{tragik.job_title}</div>
											<p className="pb-2">{tragik.job_description}</p>
											<p className="pb-2">{tragik.date}</p>
										</li>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default History;
