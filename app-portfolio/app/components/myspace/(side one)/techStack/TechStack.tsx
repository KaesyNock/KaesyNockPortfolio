import {
	Languages,
	Frameworks,
	Libraries,
	Databases,
	Design,
	CodeTools,
	NotCodeTools,
	Cloud,
	OS,
	TechStackParts,
} from "../../../constants/index";

const TechStackTemp = () => {
	return (
		<div className="sideOne">
			<div className="container">
				<div className="table ml-10 border-2 border-border-A border-separate text-left mt-5 mb-5 ">
					<div className="table-header bg-title-A-background text-rootBackground text-left font-bold text- pl-2">
						Kaesy&apos;s Tech Stack
					</div>
					<div className="table-body border-spacing-1">
						<div className="table-row-group pl-2">
							<div className="table-cell bg-colABackground text-colAText font-bold text-xs p-2 ">
								Languages:
							</div>
							<div className="table-cell list-none bg-colBBackground text-colBText text-xs p-2">
								{Languages.map((language) => (
									<li key={language}>{language}</li>
								))}
							</div>
							<div className="table-row">
								<div className="table-cell bg-colABackground text-colAText font-bold text-xs p-2">
									Frameworks:
								</div>
								<div className="table-cell list-none bg-colBBackground text-colBText text-xs p-2">
									{Frameworks.map((frameworks) => (
										<li key={frameworks}>{frameworks}</li>
									))}
								</div>
							</div>
							<div className="table-row">
								<div className="table-cell bg-colABackground text-colAText font-bold text-xs p-2">
									Libraries:
								</div>
								<div className="table-cell list-none bg-colBBackground text-colBText text-xs p-2">
									{Libraries.map((libraries) => (
										<li key={libraries}>{libraries}</li>
									))}
								</div>
							</div>
							<div className="table-row">
								<div className="table-cell bg-colABackground text-colAText font-bold text-xs p-2">
									Databases:
								</div>
								<div className="table-cell list-none bg-colBBackground text-colBText text-xs p-2">
									{Databases.map((databases) => (
										<li key={databases}>{databases}</li>
									))}
								</div>
							</div>
							<div className="table-row">
								<div className="table-cell bg-colABackground text-colAText font-bold text-xs p-2">
									Design:
								</div>
								<div className="table-cell list-none bg-colBBackground text-colBText text-xs p-2">
									{Design.map((design) => (
										<li key={design}>{design}</li>
									))}
								</div>
							</div>
							<div className="table-row">
								<div className="table-cell bg-colABackground text-colAText font-bold text-xs p-2">
									Code Tools:
								</div>
								<div className="table-cell list-none bg-colBBackground text-colBText text-xs p-2">
									{CodeTools.map((codetools) => (
										<li key={codetools}>{codetools}</li>
									))}
								</div>
							</div>
							<div className="table-row">
								<div className="table-cell bg-colABackground text-colAText font-bold text-xs p-2">
									!Code Tools:
								</div>
								<div className="table-cell list-none bg-colBBackground text-colBText text-xs p-2">
									{NotCodeTools.map((notcodetools) => (
										<li key={notcodetools}>{notcodetools}</li>
									))}
								</div>
							</div>
							<div className="table-row">
								<div className="table-cell bg-colABackground text-colAText font-bold text-xs p-2">
									Cloud:
								</div>
								<div className="table-cell list-none bg-colBBackground text-colBText text-xs p-2">
									{Cloud.map((cloud) => (
										<li key={cloud}>{cloud}</li>
									))}
								</div>
							</div>
							<div className="table-row">
								<div className="table-cell bg-colABackground text-colAText font-bold text-xs p-2">
									Operating Systems:
								</div>
								<div className="table-cell list-none bg-colBBackground text-colBText text-xs p-2">
									{OS.map((os) => (
										<li key={os}>{os}</li>
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

export default TechStackTemp;
