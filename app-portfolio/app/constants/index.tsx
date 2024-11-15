
// COMPONENTS INDEX//



import { SideNavItem } from "../../lib/definitions";

export const MobileItems: SideNavItem[] = [
	{
		id: "1",
		title: "About",
		path: "../mobile/about",
		
	},
	{
		id: "2",
		title: "Contact",
		path: "../mobile/contact",
		
	},
	{
		id: "3",
		title: "Tech Stack",
		path: "../mobile/techstack",
		
	},
	{
		id: "4",
		title: "Education and Certifications",
		path: "../mobile/education",
		
	},
	{
		id: "5",
		title: "Projects",
		path: "/projects",
		
		submenu: true,
		// subMenuItems: [
		// 	{ title: "All", path: "/projects" },
		// 	{ title: "Web Design", path: "/projects/web-design" },
		// 	{ title: "Graphic Design", path: "/projects/graphic-design" },
		// ],
	},
	{	id: "6",
		title: "Blogs",
		path: "../components/bloglinks/BlogLinks.tsx",
		
		submenu: true,
		subMenuItems: [
			{ title: "How Did We Get Here", path: "../blogs/blogpostone" },
			{ title: "Don't Agree to Projects where your husband is Scrum Master", path: "../blogs/blogposttwo" },
			{ title: "Can We Talk About Imposter Syndrome?", path: "../blogs/blogpostthree" },
		],
	},
	{	id: "7",
		title: "Comments",
		path: "../components/comments/Comments.tsx",
		
	},
];


export const ComponentLinks = [
	{
		id: "0",
		href: "/",
		title: "Home",
	},
	{
		id: "1",
		href: "/components/About",
		title: "About",
	},
	{
		id: "2",
		href: "/components/projects/Projects",
		title: "Projects",
	},
	{
		id: "3",
		href: "/components/bloglinks/BlogLinks",
		title: "About",
	},
	{
		id: "4",
		href: "/components/techstack/TechStack",
		title: "Tech Stack",
	},
	{
		id: "54",
		href: "/components/education/Education",
		title: "Education and Certifications",
	},
	{
		id: "6",
		href: "/components/job-history/History.",
		title: "Work History",
	},
];

// COMPONENT CONSTANTS //
export const TechStackParts = [
    "Languages",
    "Frameworks",
    "Libraries",
    "Databases",
    "Design",
    "Code Tools",
    "!Code Tools",
    "Cloud",
    "Operating Systems"
]

export const Languages = [
    "JavaScript",
    "Python",
    "Typescript",
    "HTML"
];

export const Frameworks = [
    "Next.js",
    "Angular",
    "Express",
    "Django",
    "Refine.io"
];

export const Libraries = [
    "React",
    "Axios",
    "Mongoose"
];
export const Databases = [
    "MongoDB",
    "MySQL",
    "DynamoDB",
    "NoSQL"];

export const Design = [
    "CSS",
    "Tailwind CSS",
    "Ant Design",
    "Bootsrap"
];

export const CodeTools = [
	"Node.js",
	"Git",
	"GitHub",
	"Gitlab",
	"Postman API",
	"Sanity.io",
	"GraphQL",
];

export const NotCodeTools = [
    "Jira",
    "Confluence",
    "Figma",
    "AdobePhotoshop",
    "Adobe Creative Suite"
];

export const Cloud = [
    "AWS",
    "VMware"
]

export const OS = [
    "Windows",
    "Linux"
]

// LINK CONSTANTS

export const ContactLinks = [
	{
        id: "1",
		url: "emailto: kaesynock@gmail.com",
		title: "Email",
	},

	{
        id: "2",
		url: "https://www.linkedin.com/in/kaesy-nock/",
		title: "LinkedIn",
	},

	{
        id: "3",
		url: "https://calendly.com/kaesynock",
		title: "Schedule",
	},

	{
        id: 4,
		url: "https://github.com/kaesynock",
		title: "GitHub",
	},
];






