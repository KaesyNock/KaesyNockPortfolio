import React from 'react'
import {School, Certifications, FutureCertifications, Classes} from './index.js'

const Education = () => {
  return (
		<div>
			<div className="hidden md:table md:ml-10 md:border-2 md:border-border-A md:border-separate md:text-left md:mt-5 md:mb-5 md:w-full">
				<div className="table-header bg-title-A-background text-rootBackground text-left font-bold text- pl-2">
					Education and Certifications
				</div>
				<div className="table-body border-spacing-1">
					<div className="table-row-group pl-2">
						<div className="table-cell bg-colABackground text-colAText font-bold text-xs p-2 ">
							Education:
						</div>
						<div className="table-cell list-none bg-colBBackground text-colBText text-xs p-2">
							{School.map((school) => (
								<li key={school.id}>
									<div className="font-bold">{school.title}</div>
									<p>{school.degree}</p>
									<p className="pb-2">{school.date}</p>
								</li>
							))}
						</div>
						<div className="table-row">
							<div className="table-cell bg-colABackground text-colAText font-bold text-xs p-2">
								Certifications:
							</div>
							<div className="table-cell list-none bg-colBBackground text-colBText text-xs p-2">
								{Certifications.map((certifications) => (
									<li key={certifications.id}>
										<div className="font-bold">{certifications.title}</div>
										<p>{certifications.provider}</p>
										<p>{certifications.date}</p>
									</li>
								))}
							</div>
						</div>
						<div className="table-row">
							<div className="table-cell bg-colABackground text-colAText font-bold text-xs p-2">
								Future Certifications:
							</div>
							<div className="table-cell list-none bg-colBBackground text-colBText text-xs p-2">
								{FutureCertifications.map((futurecerts) => (
									<li key={futurecerts.id}>
										<div className="font-bold">{futurecerts.title}</div>
										<p>{futurecerts.provider}</p>
										<p>{futurecerts.tentative_date}</p>
									</li>
								))}
							</div>
						</div>
						<div className="table-row">
							<div className="table-cell bg-colABackground text-colAText font-bold text-xs p-2">
								Current Areas of Study:
							</div>
							<div className="table-cell list-none bg-colBBackground text-colBText text-xs p-2">
								{Classes.map((classes) => (
									<li key={classes.id}>
										<div className="font-bold pt-1">{classes.title}</div>
										<p>{classes.provider}</p>
										<p className="pb-2">{classes.tentative_date}</p>
									</li>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Education