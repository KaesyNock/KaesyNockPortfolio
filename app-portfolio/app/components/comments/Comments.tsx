import React from "react";
import { Comment1, Comment2, Comment3, Comment4 } from "../comments/index.js";
import Image from "next/image.js";
import Mike from "../../../public/Mike.svg";
import Kids from "../../../public/kids.svg";
import DM from "../../../public/digitalmarketing.svg";

const CommentsContainer = () => {
	return (
		<div className="ml-60 w-3/5">
			<div className="table ml-10  border-separate text-left mt-5 mb-5 w-full">
				<div className="table-header bg-title-B-background text-title-B-text font-bold mt-8 p-1 pl-4">
					Kaesy&apos;s Reviews and Comments:
				</div>
				<div className="table-body border-spacing-1">
					<div className="table-row-group pl-2">
						<div className="table-cell bg-title-B-text text-colAText text-center font-bold text-xs p-6">
							{Comment1.map((comment) => (
								<li className="list-none" key={comment.id}>
									<div className="font-bold mb-2">{comment.name}</div>
									<Image
										src={Kids}
										alt="profile pic"
										width={100}
										height={100}
									/>
								</li>
							))}
						</div>
						<div className="table-cell list-none bg-title-B-background text-colBText text-xs p-2 ">
							{Comment1.map((comment) => (
								<li className="list-none" key={comment.id}>
									<div className="font-bold mb-4">{comment.date}</div>
									<p>{comment.comment}</p>
								</li>
							))}
						</div>
						<div className="table-row">
							<div className="table-cell  bg-title-B-text text-colAText text-center font-bold text-xs p-6">
								{Comment2.map((comment) => (
									<li className="list-none" key={comment.id[1]}>
										<div className="font-bold mb-2">{comment.name}</div>
										<Image
											src={Mike}
											alt="profile pic"
											width={100}
											height={100}
										/>
									</li>
								))}
							</div>
							<div className="table-cell list-none  bg-title-B-background text-colBText text-xs p-2">
								{Comment2.map((comments) => (
									<li className="list-none" key={comments.id[1]}>
										<div className="font-bold">{comments.date}</div>
										<p>{comments.comment}</p>
									</li>
								))}
							</div>
						</div>
						<div className="table-row">
							<div className="table-cell  bg-title-B-text text-colAText text-center font-bold text-xs p-6">
								{Comment3.map((comment) => (
									<li className="list-none" key={comment.id}>
										<div className="font-bold mb-2">{comment.name}</div>
										<Image
											src={DM}
											alt="profile pic"
											width={100}
											height={100}
											className="object-center"
										/>
									</li>
								))}
							</div>
							<div className="table-cell list-none  bg-title-B-background text-colBText text-xs p-2">
								{Comment3.map((comments) => (
									<li className="list-none" key={comments.id}>
										<div className="font-bold mb-2">{comments.date}</div>
										<p>{comments.comment}</p>
									</li>
								))}
							</div>
						</div>
						<div className="table-row">
							<div className="table-cell  bg-title-B-text text-colAText text-center font-bold text-xs p-6">
								{Comment4.map((comment) => (
									<li className="list-none" key={comment.id}>
										<div className="font-bold mb-2">{comment.name}</div>
										<Image
											src={Mike}
											alt="profile pic"
											width={100}
											height={100}
											className="object-center"
										/>
									</li>
								))}
							</div>
							<div className="table-cell list-none  bg-title-B-background text-colBText text-xs p-2">
								{Comment4.map((comments) => (
									<li className="list-none" key={comments.id}>
										<div className="font-bold mb-2">{comments.date}</div>
										<p>{comments.comment}</p>
									</li>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommentsContainer;
